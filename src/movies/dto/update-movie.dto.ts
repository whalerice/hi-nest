import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreatMovieDto) {}
