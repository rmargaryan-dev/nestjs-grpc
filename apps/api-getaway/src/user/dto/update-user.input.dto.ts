import { IsString, IsUrl } from 'class-validator';

export class UpdateUserInputDto {
  @IsString()
  @IsUrl()
  twitterUri: string;

  @IsUrl()
  facebookUri: string;
}
