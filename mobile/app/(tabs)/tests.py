
resultado = agendar("", "14:00", "verdadeiro")
esperado = "preencha todos os campos"

if resultado == esperado:
    print("Teste 1 (Campos Vazios): Passou")
else:
    print(f"Teste 1 (Campos Vazios): Falhou (Recebido: '{resultado}')")



resultado = agendar("12/05/2026", "15:30", "verdadeiro")
esperado = "agendamento realizado"

if resultado == esperado:
    print("Teste 2 (Sucesso): Passou")
else:
    print(f"Teste 2 (Sucesso): Falhou (Recebido: '{resultado}', Esperado: '{esperado}')")



resultado = agendar("10/10/2026", "25:00", "verdadeiro")
esperado = "hora invalida"

if resultado == esperado:
    print("Teste 3 (Hora Invalida): Passou")
else:
    print(f"Teste 3 (Hora Invalida): Falhou (Recebido: '{resultado}', Esperado: '{esperado}')")