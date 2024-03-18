¿Cómo entiende ChatGpt los prompts?
Etapas a traves de la cuales ChatGpt emplea para entender los Prompts:
1- Tokenización:
    El texto del prompt dado es se divide enpartes mas pequeñas token como el nombre del proceso indica que pueden ser palabras, caracteres o fragmentos de palabras.
2- Codificación:
    Cada uno de estos Tokens es codificado en vectores numericos que representan su contexto y significado en raleacion con el resto de palabras del prompt
3- Procesamiento a traves de capaz neuronales:
    Estos vectores pasan a traves de las llamadas capas neuronales quienes los procesan y extraen las carateristicas relevantes del prompt como lo puede ser el format y la task.

¿Dentro del algoritmo de GPT para producir palabra tras palabra, como se realiza
este procedimientos?
Este proceso de genereacion de paalabra tras palabra se basa en una tecnica llamada "decodificacion regresiva".
1- Inicializacion:
    El modelo comienza con un token de inicio especial que indica que está comenzando a generar una respuesta. Este token se pasa a través del modelo para obtener una distribución de probabilidad sobre todas las palabras en el vocabulario.
2- Muestreo Estocástico
    Una vez que se obtiene la distribución de probabilidad sobre todas las palabras, el modelo selecciona una palabra para la siguiente posición en la respuesta. Las palabras se eligen con una probabilidad proporcional a sus puntuaciones. Otras estrategias de decodificación pueden incluir la selección de la palabra con la probabilidad más alta o la búsqueda de haz.
¿Cómo emite respuestas ChatGPt?
Pasos a traves de los cuales Chat Gpt emite una respuesta:
1- Codificación del prompt: 
    El texto del prompt se codifica en una representación numérica que el modelo puede entender. Esta representación captura el significado y el contexto del prompt.
2- Generación de tokens de respuesta:
    El modelo comienza generando un token especial que indica el inicio de la respuesta. Luego, de forma autoregresiva, genera un token adicional a la vez, cada uno condicionado por los tokens previamente generados.
3- Decodificación de tokens: 
    Cada token generado por el modelo se convierte en una palabra o símbolo en el vocabulario del modelo.
4- Selección de tokens: 
    Utiliza distribuciones de probabilidad condicionales para seleccionar el token más probable dados los tokens generados previamente y el contexto proporcionado por el prompt.
5- Refinamiento de la respuesta: 
    Durante la generación de la respuesta, el modelo puede ajustar sus predicciones en función del contexto.

¿A que equivale una palabra del prompt?
Cada palabra es una unidad de texto que el modelo interpreta individualmente como Token. Por ejemplo: La frase "Argentina es un pais pobre" la IA la divide en tokens por cada palabra lo que seria "Argnetina", "es", "un", "pais", "pobre"