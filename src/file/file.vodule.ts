import { Injectable } from '@nestjs/common';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type, file) {}

  removeFile(fileName: string) {}
}
