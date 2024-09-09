import CompanyDescription from "./CompanyDescription"


const AboutContainer = ({name}) => {


    return (
        <div id="about-container">
            <CompanyDescription name={name}/>
        </div>
    )

}

export default AboutContainer