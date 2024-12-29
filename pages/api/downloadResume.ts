import {getDownloadURL, ref} from 'firebase/storage';
import { storage } from '@/lib/firebase';

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse){
    if(request.method === 'GET'){
        try{
            const resumeRef = ref(storage,'/resume/12-27-24.pdf')
            const url = await getDownloadURL(resumeRef);
            response.status(200).json({url})

        }catch(error){

            response.status(500).json({message: 'Error downloading resume:', error})
        }

    }else{
        response.status(405).json({message: 'Method not allowed'})
    }
}
