import { Item } from "./Item"


export const ItemList = ({ products }) => {
    return (
        <>
        <section className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] py-[7rem] px-[2rem] m-auto">

            {
                products?.map((prod) => {
                    return <Item key={prod.id} {...prod} />
                })
            }
            </section>
        </>
    )
}
