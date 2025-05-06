import { z } from 'zod';

export const schema = z.object({
    nome: z.string().min(1, "Nome é necessário"),
    idade: z.number().min(1, "Idade é necessária"),
    uf: z.string().min(2, "UF é necessário"),
});

export type FormFields = z.infer<typeof schema>;
