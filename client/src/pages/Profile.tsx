import { JSXElement } from "solid-js";
import { user } from "../App";

export default function About(): JSXElement {

    return <>
        <h2> Welcome Back {user.name} </h2>
    </>

}
