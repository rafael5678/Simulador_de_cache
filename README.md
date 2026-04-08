# 🧠 Simulador de Jerarquía de Memoria: Caché (L1/L2/RAM) vs Disco

Este proyecto simula cómo funciona la jerarquía de memoria en un sistema operativo, específicamente comparando el acceso a archivos desde el disco duro (memoria secundaria) frente al acceso desde la memoria RAM (caché).

## 🚀 Concepto: Jerarquía de Memoria y Optimización

En la informática, la **jerarquía de memoria** es una organización de los sistemas de almacenamiento que busca equilibrar el costo, la capacidad y la velocidad. El acceso a los datos en el disco es órdenes de magnitud más lento que el acceso en RAM. Por ello, los sistemas operativos y las aplicaciones modernas utilizan una **caché** para almacenar datos que se consultan con frecuencia.

### ¿Cómo funciona este simulador?
1. **💾 Lectura desde Disco:** La primera vez que solicitas un archivo, el sistema debe buscarlo en el almacenamiento físico. Esto es costoso en términos de tiempo.
2. **📦 Almacenamiento en RAM (Caché):** Una vez leído, el contenido se guarda en un objeto de JavaScript (`Map` o diccionario) que reside en la memoria RAM.
3. **⚡ Lectura desde Caché:** Las siguientes veces que se solicita el mismo archivo, el sistema lo entrega directamente desde la RAM, evitando el acceso al disco.

## 🛠️ Implementación Detallada

El script principal se encuentra en [cache.js](file:///c:/Users/Juan%20Rafael/Desktop/El%20Simulador%20de%20Memoria/cache.js).

### Estructura del Código:
- **`cache`**: Un objeto de JavaScript que actúa como nuestro "almacén de RAM".
- **`leerArchivo(ruta)`**: Esta función centraliza la lógica de decisión:
    - Comprueba si la `ruta` ya existe en el objeto `cache`.
    - Si existe, devuelve el contenido inmediatamente (**Caché Hit**).
    - Si no existe, utiliza `fs.readFileSync` para traer el archivo del disco y lo guarda en la caché (**Caché Miss**).

## 📊 Resultados de la Simulación

Al ejecutar el script, se miden los tiempos de ejecución para ambas situaciones:

| Tipo de Lectura | Tiempo Aproximado | Origen de Datos |
| :--- | :--- | :--- |
| **Primera Lectura** | ~23.39 ms | 💾 Disco Duro |
| **Segunda Lectura** | ~0.58 ms | 📦 Memoria RAM (Caché) |

> **Nota:** La lectura desde la caché es aproximadamente **40 veces más rápida** que la lectura desde el disco en este ejemplo con un archivo de 4.7MB.

## 💻 Cómo Ejecutar el Proyecto

1. Asegúrate de tener **Node.js** instalado en tu sistema.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el comando:
   ```bash
   node cache.js
   ```

## 🧠 Reflexión
Este simulador demuestra por qué la gestión de la memoria es crítica. Si un sistema operativo tuviera que ir al disco para cada operación, las aplicaciones serían extremadamente lentas. La caché es el puente que permite que la velocidad de procesamiento de la CPU no se vea limitada por la lentitud de los dispositivos de almacenamiento masivo.
