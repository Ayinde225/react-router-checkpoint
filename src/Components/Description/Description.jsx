import "./description.css";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Description({list}) {

    console.log(list.length);
    let params = useParams();
    return (
        <div className="desc">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>Aucun film avec cet id </p> :
            
            <>
              <Link to="/" Style={"text-decoration: none;position: relative;right: 35rem;"}>
                   <button className="btn btn-success">Retour</button>
               </Link>
            <MovieCard ele={list[params.id]} /> 
            <iframe width="560" height="315" src={list[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </>
            }
        </div>
    )
}
