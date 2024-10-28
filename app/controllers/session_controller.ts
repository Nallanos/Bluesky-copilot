import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon';
export default class SessionController {
    public async login({ request, auth, response }: HttpContext) {
        try {
            const { email, password } = request.only(['email', 'password'])
            const user = await User.verifyCredentials(email, password)
            await auth.use('web').login(user)
            response.redirect('/dashboard')
        } catch (error) {
            response.status(400)
        }
    }

    public async signUp({ request, auth, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        await User.create({ email: request.body().email, password: request.body().password, createdAt: DateTime.now() })
        const user = await User.verifyCredentials(email, password)
        await auth.use('web').login(user)
        response.redirect('/dashboard')
    }
}
