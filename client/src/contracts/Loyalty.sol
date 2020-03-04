pragma solidity ^0.6.1;




library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     *
     * _Available since v2.4.0._
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}


contract Loyalty{
    using SafeMath for uint256;

    uint256 public partnerCount = 0;
    uint256 public memberCount = 0;
    string public dapp_name;
    string public dapp_builder;
    mapping(uint256 => Partner) public partners;
    mapping(uint256 => Member) public members;
    mapping(address => uint256) public points;

    constructor() public{
        dapp_name="Loyalty And Reward System";
        dapp_builder ="Goodness Ezeokafor";
    }


    struct Partner{
        uint256 id;
        string organisation_name;
        string organisation_address;
        string email;
        uint256 totalPoints;
        address organisation_tx_address;        
    }

    struct Member{
        uint256 id;
        string first_name;
        string last_name;
        string email;
        string phone_number;
        // uint256 point;
        address payable tx_address;
    }




    event PartnerCreated(
        uint256 id,
        string organisation_name,
        string organisation_address,
        string email,
        uint256 totalPoints,
        address organisation_tx_address 
    );

    event MemberCreated(
        uint256 id,
        string first_name,
        string last_name,
        string email,
        string phone_number,
        // uint256 point,
        address payable tx_address
    );
    event Redeem(
        address payable member_addres, 
        uint256 value
    );

    event EarnPoint(
        uint256 updatedPartnerTotalPoints,
        uint256 updatedMemberPoint
    );
    function createPartner(
        string memory organisation_name,
        string memory organisation_address,
        string memory email,
        uint256 totalPoints        
    ) public{
        partnerCount++;
        partners[partnerCount] = Partner(
            partnerCount,
            organisation_name,
            organisation_address,
            email,
            totalPoints,
            msg.sender
        );
        emit PartnerCreated(
            partnerCount,
            organisation_name,
            organisation_address,
            email,
            totalPoints,
            msg.sender
        );
    }


    function createmember(
        
        string memory first_name,
        string memory last_name,
        string memory email,
        string memory phone_number

    )public{
        memberCount++;
        members[memberCount]  = Member(
            memberCount,
            first_name,
            last_name,
            email,
            phone_number,
            // 0,
            msg.sender
        );
        emit MemberCreated(
            memberCount,
            first_name,
            last_name,
            email,
            phone_number,
            // 0,
            msg.sender
       );
    }

    function earnPoint(
            uint256 _patid, 
            // uint256 _memId,
            uint256 point
        )public{
        Partner memory p = partners[_patid];
        // Member memory m = members[_memId];
        require(point < p.totalPoints, "Not Enough Points");
        p.totalPoints = partners[_patid].totalPoints.sub(point);
        points[msg.sender] = points[msg.sender].add(point);
        // m.point = members[_memId].point.add(point);
        partners[_patid] = p;
        // members[_memId] = m;
        emit EarnPoint(
            p.totalPoints,
            // m.point
            points[msg.sender]
        );
    }

    function getPartner(uint256 _id)public view returns(
        string memory ,
        string memory,
        string memory,
        uint256
    ){
        Partner memory p = partners[_id];
        return(
            p.organisation_name,
            p.organisation_address,
            p.email,
            p.totalPoints
        );
    }

    // function redeemPoint(uint256 _memId, uint256 value) public payable{
    //     Member memory m = members[_memId];
    //     m.tx_address.transfer(value);
    //     emit Redeem(m.tx_address, value);
    // }
}