import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const { article_id  } = req.query

    fetch('http://localhost:3011/users').then(response=>response.json())
    .then(ress=>{
        if(req.method == 'GET'){
            res.status(200).json({
                code: 0,
                data:{
                    article_id:article_id ,
                    md:ress.body
                },
                msg:'请求成功'
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })

    
  }