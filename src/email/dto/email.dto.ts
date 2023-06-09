import { IsString, IsNotEmpty, IsEmail,IsOptional } from "class-validator";

export class EmailDto {
    @IsString({ message: 'You must to provide a string' })
    @IsNotEmpty({ message: 'The field "to" is required' })
    @IsEmail()
    to: string;

    @IsString({ message: 'You must to provide a string' })
    @IsNotEmpty({ message: 'The field "subject" is required' })
    subject: string;
    
    @IsEmail()
    @IsNotEmpty({ message: 'The field "to" is required' })
    @IsOptional()
    from: string;

    @IsString({ message: 'You must to provide a string' })
    @IsNotEmpty({ message: 'The field "text" is required' })
    text: string;

    @IsString({ message: 'You must to provide a string' })
    @IsNotEmpty({ message: 'The field "html" is required' })
    html: string;
}
