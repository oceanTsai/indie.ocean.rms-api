import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from '../application/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() req) {
        // In a real app, use a LocalGuard to pre-validate credentials, 
        // or validate here. For simplicity, we assume req body has email/password and call validate manually or logic inside service.
        // Actually best practice is LocalAuthGuard. Let's do simple direct call for now or fix later.
        // Let's assume input is DTO { email, password }
        const user = await this.authService.validateUser(req.email, req.password);
        if (!user) {
            throw new Error('Invalid credentials'); // or UnauthorizedException
        }
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() signUpDto: { email: string; password: string; name?: string }) {
        return this.authService.register(signUpDto);
    }
}
