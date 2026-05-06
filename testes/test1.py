def agendar(data, hora, confirmacao):
    if not data or not hora or not confirmacao:
        return "preencha todos os campos"
    else:
        return "erro"

resultado = agendar("32/04/2026", "10:00", "verdadeiro")
esperado = "data invalida"

if resultado == esperado:
    print("teste passou")
else:
    print(f"teste falhou (Recebido: '{resultado}', Esperado: '{esperado}')")