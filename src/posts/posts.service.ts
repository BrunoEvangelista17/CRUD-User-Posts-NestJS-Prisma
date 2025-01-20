import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { id }, include: { author: true } });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({ include: { author: true } });
  }

  async getPublishedPosts(): Promise<Post[]> {
    
    return this.prisma.post.findMany({
      where: { published: true },
      include: { author: true },
      });
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const { authorEmail } = dto;
  
    // Remove authorEmail do objeto dto para evitar conflitos
    delete dto.authorEmail;
  
    // Cria o objeto de dados para o Prisma
    const data: Prisma.PostCreateInput = {
      ...dto, // Insere o restante dos dados do DTO
      author: {
        connect: { email: authorEmail }, // Usa o valor extraído antes de deletar
      },
    };
  
    // Realiza a criação do post
    return this.prisma.post.create({ data, include: { author: true } });
  }
  

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    const data: Prisma.PostUpdateInput = {
      ...dto, // Insere o restante dos dados do DTO
    };

    return this.prisma.post.update({
      where: { id },
      data,})
  }

  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },});
  }
}
