import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Nest Course API')
    .setDescription('API documentation for the Nest Course ')
    .setVersion('1.0.0')
    .addBearerAuth()
    .setContact('KITONK', 'https://github.com/KITONK', 'kiyj585@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
}
