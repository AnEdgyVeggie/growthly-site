import HandsPhoto from "../assets/images/hands.jpg"
import MeetPhoto from "../assets/images/meet.jpeg"

const CompanyDescription = ({name}) => {

    return (
        <div id="company-information">
            <div id="company-description">
                <div>
                    <img src={HandsPhoto} />
                </div>

                <div id="company-mission-text">
                    <h2>Nice to meet you,</h2>
                    <p>{name} was founded on a very basic principle:
                    <u><b> People who are vulnerable and need help, should not be taken advantage of.</b></u> At {name}, we 
                    believe that the most worthwhile investments come from helping those in our communities, and that
                    win-win situations can not only exist for all of us, but be the new norm.
                    </p>

                    <div id="company-desc-text" >
                        <h2>How can we help?</h2>
                        <p>{name}'s goal is to prevent people in our communities who have lower credit get through
                        tough times, while also providing short-term investment opportunities for those who are willing to
                        give them a chance. This is our idea of a win-win situation; The only losers here, are the ones who
                        are willing to practice predatory lending practices that hurt more than they help. <br/><br/>
                        </p>
                    </div>
                </div>
            </div>

            <div id="details">
                <div id="details-text">
                    <h2>
                        Sounds great, but how does it work?
                    </h2>
                    <p>
                        {name} utilizes a 2 part system: <b>Lenders</b>, and <b>Borrowers</b>
                    </p>
                    <h3>Lenders</h3>
                    <p>Lenders are our heroes. Lenders are investors who are looking to make short-term investments into their fellow person.
                        Lenders can post loans onto our <b>loan board</b>. These loans will have different options, like the amount of money,
                        length of the loan, the freqency of payments, what credit scores they are willing to lend to, and an interest rate range
                        that is allowable for that loan. The goal is to make secure investments that are competitive with other lenders. 
                    </p>

                    <h3>Borrowers</h3>
                    <p>Borrowers are there to live up to their name; they are there to borrow. A credit check will be performed on anybody who
                        wishes to join our community, but <b>no credit will be rejected</b>. Your credit score will be used <b>only to display </b>
                        loan bids that fall into their their credit range. Borrowers will start with limits on how much they are able to borrow 
                        at a time, however, as they have built up an in-app reputation for good payment hygene, they will be able to qualify 
                        for larger loans, and even borrow loans from above their credit range.
                    </p>

                </div>
                
                <div>
                    <img src={MeetPhoto}/>
                </div>
            </div>
        </div>
    )

}

export default CompanyDescription