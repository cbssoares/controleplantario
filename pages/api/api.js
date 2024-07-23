const listaDePlantas = (async () => {
    const lista = await fetch("https://pesquisador-seven.vercel.app/api/tempo", { method: "GET"})
    const listaAdaptada = await lista.json()
    var listaDados =  await listaAdaptada
    console.log(await listaDados)

    return listaDados
})

const atualizaLista = (listaAtualizada) => {
    fetch("https://pesquisador-seven.vercel.app/api/tempo", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(listaAtualizada)
    })
}




export { listaDePlantas }
export { atualizaLista }

