import  connection  from "./connection";
import { AllPurchasesPerson, PurchasesByUser } from "../types/typePurchase";


export default async function selectPurchasesByUser(userId: string):Promise<PurchasesByUser|undefined> {

    const result = await connection.raw(`
    select 
    labecommerce_users.id as IdPessoa , labecommerce_users.name as NomePessoa,
    labecommerce_products.name as NomeProduto, 
    labecommerce_purchases.id as IdCompra , 
    labecommerce_purchases.quantity as Quantidade, 
    labecommerce_purchases.total_price as PrecoTotal
    
    from labecommerce_purchases

    inner join labecommerce_users 
    on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products 
    
    on
    labecommerce_purchases.product_id = labecommerce_products.id
    where labecommerce_users.id = "${userId}";
    `)

    
    
    let Allpurchases: AllPurchasesPerson[] = []
    let infoUser: any = {}

    result[0].map((person: any) => {
        infoUser = {
            idPerson: person.IdPessoa,
            namePerson: person.NomePessoa
        }

        Allpurchases.push({
            idDaCompra: person.IdCompra,
            NomeDoProduto: person.NomeProduto,
            Quantidade: person.Quantidade,
            TotalPreco: person.PrecoTotal
        })
    })

    const allPurchasesByUser: PurchasesByUser = {
        idPessoa: infoUser.idPerson,
        nomePessoa: infoUser.namePerson,
        compras: Allpurchases
    }


    return allPurchasesByUser
}