import React from "react";
import codeQuiz from '../../assets/images/works/codeQuiz.png'
import runChug from '../../assets/images/works/run&Chug.png'
import noteTaker from '../../assets/images/works/noteTaker.png'
import Ecommerce from '../../assets/images/works/Ecommerce.png'



const Portfolio = () => {

    return (
        <section className="container">
            <h1 className="mb-5"> My Works</h1>

            <div className="row justify-content-around">

                <div className="col mb-4">

                    <a target='blank' href="https://lemonsma.github.io/code-quiz/">
                        <img alt="a screenshot of the app" className="img-fluid" src={codeQuiz} />
                    </a>
                </div>



                <div className="col mb-4 ">

                    <a target='blank' className='' href="https://ancs214.github.io/RunFinder/">
                        <img alt="a screenshot of the app" className="img-fluid" src={runChug} />
                    </a>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col mb-4">

                    <a className='' target='blank' href="https://floating-wildwood-70716.herokuapp.com/">
                        <img alt="a screenshot of the app" className="img-fluid" src={noteTaker} />
                    </a>
                </div>

                <div className="col mb-4">

                    <a target='blank' className='' href="https://github.com/LeMonSma/fantastic-umbrella">
                        <img alt="a screenshot of the app" className="img-fluid" src={Ecommerce} />
                    </a>
                </div>
            </div>


        </section>
    )

}

export default Portfolio