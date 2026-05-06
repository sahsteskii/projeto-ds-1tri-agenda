
resultado = agendar("", "14:00", "verdadeiro")
esperado = "preencha todos os campos"

if resultado == esperado:
    print("Teste 1 (Campos Vazios): Passou")
else:
    print(f"Teste 1 (Campos Vazios): Falhou (Recebido: '{resultado}')")