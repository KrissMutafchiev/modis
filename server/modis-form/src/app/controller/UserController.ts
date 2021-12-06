import { DefaultContext } from 'koa';

export default class UerController {

    /**
     * @swagger
     * /user:
     *  get:
     *      tags:
     *          - User
     *      summary: The user string is returned.
     *      responses:
     *          200:
     *              description: user message
     *              content:
     *                  application/plain:
     *                      schema:
     *                          type: string
     *                      example:
     *                          ok
     */
    public static async user(ctx: DefaultContext) {
        const body:{firstName:string,lastName:string,email:string} = ctx.request.body; 

        if(body.firstName.length >= 5 && body.lastName.length >= 5){
           return ctx.status = 200
        }
        ctx.status = 422; // or status code 422
    }
}
