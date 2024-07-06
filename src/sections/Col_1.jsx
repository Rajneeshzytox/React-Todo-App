import Card from "../components/Card"


export default function Col_1() {

    return(
        <section className="col-1 flex justify-evenly gap-8 items-center md:flex-col">
           <Card />
           <Card />
        </section>
    )
}

