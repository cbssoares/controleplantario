import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import {plantas} from './data/plantas'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'PUT'], origin: ['https://cbssoares.github.io', 'http://localhost:3000', 'http://127.0.0.1:5500', 'https://pesquisador-besvbr1sy-cbssoares.vercel.app']
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  
  // Rest of the API logic
if (req.method === "GET") {
  const lista = await fetch("https://getpantry.cloud/apiv1/pantry/ddc41205-af29-4dbf-ada1-f7acca55d4d8/basket/plantas", { method: "GET" })
    const listaAdaptada = await lista.json()
    const listaDados = await listaAdaptada.plantas
    res.status(200).json( await listaDados)
} else if(req.method === "PUT"){

    fetch("https://getpantry.cloud/apiv1/pantry/ddc41205-af29-4dbf-ada1-f7acca55d4d8/basket/plantas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ plantas: req.body })
    })
    const listaNova = req.body
   
    res.status(201).json(listaNova)
}
  
}
