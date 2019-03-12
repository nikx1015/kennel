import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./animal.css"
import { Link } from "react-router-dom";

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}