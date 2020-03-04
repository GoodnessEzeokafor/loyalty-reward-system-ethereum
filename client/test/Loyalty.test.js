require('chai')
    .use(require('chai-as-promised'))
    .should()


const Loyalty = artifacts.require("./Loyalty.sol")

contract("Loyalty Smart Contract", ([dep, partner, member]) => {
    before(async() => {
        this.contract =  await Loyalty.deployed()
    })

    describe("#CHECKING FIRST PART", async() => {

        it("checks if the contract deployed successfully", async() => {
            const address = this.contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, "")
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)    
        })
        it("checks if dapp_name is correct",async() => {
            const dapp_name = await this.contract.dapp_name()
            assert.equal(dapp_name, "Loyalty And Reward System")
        })
        it("checks if dapp_builder is correct",async() => {
            const dapp_builder = await this.contract.dapp_builder()
            assert.equal(dapp_builder, "Goodness Ezeokafor")
        })
        it("checks if partnerCount is 0", async() => {
            const projectCount = await this.contract.partnerCount()
            assert.equal(projectCount, 0)

        })
        
        it("checks if memberCount is 0", async() => {
            const memberCount = await this.contract.memberCount()
            assert.equal(memberCount, 0)
        })
    })

    describe("#CHECKING SECOND PART", async() => {
        it("checks if the createPartner is working", async() => {
            const createPartner = await this.contract.createPartner(
                "First Organisation",
                "Organisation Address",
                "email",
                3000,
                {from:partner}
            )

            const event = createPartner.logs[0].args
            assert.equal(event.id.toNumber(),1, "id is correct")
            assert.equal(event.organisation_name,"First Organisation", "organisation_name is correct")
            assert.equal(event.organisation_address,"Organisation Address", "Organisation Address is correct")
            assert.equal(event.email,"email", "email is correct")
            assert.equal(event.totalPoints.toNumber(),3000, "point is correct")
            assert.equal(event.organisation_tx_address,partner, "organisation tx address is correct")
        })
        it("checks if the createMember is working", async() => {
            const createMember = await this.contract.createmember(
                "FirstName",
                "LastName",
                "email",
                "908979",
                {from:member}
            )

            const event = createMember.logs[0].args
            assert.equal(event.id.toNumber(),1, "id is correct")
            assert.equal(event.first_name,"FirstName", "organisation_name is correct")
            assert.equal(event.last_name,"LastName", "Organisation Address is correct")
            assert.equal(event.email,"email", "email is correct")
            assert.equal(event.phone_number,"908979", "point is correct")
        })
    })

    describe('#THIRD CHECKING PART', async() => {
        it("checks if earnPoint is working", async() => {
            const earn = await this.contract.earnPoint(1, 20, {from:member})
            
            const partner = await this.contract.partners(1)
            const memberPoint = await this.contract.points(member)
            const event = earn.logs[0].args
            assert.equal(event.updatedPartnerTotalPoints.toNumber(), 2980)
            assert.equal(event.updatedMemberPoint.toNumber(), 20)
            // const member =await this.contract.members(1)
            // console.log("PARTNER Point:",partner.totalPoints.toString())
            // console.log("Member Point:", memberPoint.toString())
            // console.log("MEMBER Point:",member.point)
            // assert.equal(partner.totalPoints.toString(), 2980)
        })
        it("checks if the earnPoint is working again", async() => {
            const earn = await this.contract.earnPoint(1, 50, {from:member})
            const partner = await this.contract.partners(1)
            const memberPoint = await this.contract.points(member)
            const event = earn.logs[0].args
            assert.equal(event.updatedPartnerTotalPoints.toNumber(), 2930)
            assert.equal(event.updatedMemberPoint.toNumber(), 70)

        })
    })
})