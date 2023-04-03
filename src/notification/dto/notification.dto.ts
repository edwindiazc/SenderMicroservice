import { IsString, IsNotEmpty, IsOptional } from 'class-validator'
export class NotificationDto {

    @IsString({ message: 'The message must be a string' })
    @IsNotEmpty({ message: 'The message cannot be null' })
    event: string;

    @IsString({ message: 'The channel must be a string' })
    @IsNotEmpty({ message: 'The channel cannot be null' })
    channel: string;

    @IsOptional()
    data: any;
}
