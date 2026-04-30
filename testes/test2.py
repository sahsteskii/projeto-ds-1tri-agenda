def agendar(data, hora, confirmacao):
    if not data or not hora or not confirmacao:
        return "preencha todos os campos"
    else:
        return "agendamento realizado"

resultado = agendar("26/06/2026", "", "verdadeiro")
esperado = "preencha todos os campos"

if resultado == esperado:
    print("teste passou")
else:
    print(f"teste falhou (Recebido: '{resultado}', Esperado: '{esperado}')")