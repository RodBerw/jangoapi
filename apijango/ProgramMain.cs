using System;

/*
namespace Trabalho
{
	class Program
	{
		static void Main(string[] args)
		{
            
            Console.WriteLine("Bem vind@!");
				
				bool sair = false;
				while(!sair)
				{
                    Console.WriteLine("1 - Gerenciar usuários");
					Console.WriteLine("2 - Gerenciar livros");
					Console.WriteLine("3 - Gerenciar locações de livros");
                    Console.WriteLine("5 - Sair");

                    int opcao = 0;
                    try
					{
						opcao = int.Parse(Console.ReadLine());
					}
					catch(Exception erro)
					{
					}

                    switch(opcao)
					{
						case 1:
							
							Console.WriteLine("1 - Listar os usuarios");
					        Console.WriteLine("2 - Cadastrar um usuario");
                            Console.WriteLine("3 - Atualizar um usuario");
                            Console.WriteLine("4 - Remover um usuario");
                            Console.WriteLine("5 - Voltar");

                            try
                            {
                                opcao = int.Parse(Console.ReadLine());
                            }
                            catch(Exception erro)
                            {
                            }

                            switch(opcao){
                                case 1:
                                    foreach(Book book in BookRepository.Books){
                                        Console.WriteLine(book);
                                    }
                                    break;
                                case 2:
                                    break;
                                case 3:
                                    break;
                                case 4:
                                    break;
                                case 5:
							        break;
                            }
						    break;
						case 2:
                            break;
                    }

					Console.WriteLine("Digite 1 para listar os usuarios");
					Console.WriteLine("Digite 2 para cadastrar um usuario");
					Console.WriteLine("Digite 3 para atualizar um usuario");
					Console.WriteLine("Digite 4 para remover um usuario");
					Console.WriteLine("Digite 5 para sair");
					
					
					try
					{
						opcao = int.Parse(Console.ReadLine());
					}
					catch(Exception erro)
					{
					}
                }
        }
    }
}

*/