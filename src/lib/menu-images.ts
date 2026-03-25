import { normalizeText } from "@/lib/utils";

const imageManifest = [
  "Antepasto de polvo e lula.JPG",
  "Arroz de bacalhau.JPG",
  "Bacalhau de natas.jpg",
  "Bacalhau à Siqueira.jpg",
  "Bacalhau à moda.JPG",
  "Bacalhoada_Moda.png",
  "bobo-de-camarao-4.png",
  "camarao-thermidor-2.png",
  "Casquinha de camarão 11111.JPG",
  "Casquinha de siri 1.JPG",
  "Cuscuz de Camarão.JPG",
  "Cuscuz de sardinha 1.jpg",
  "Escabeche de berinjela 11.JPG",
  "Farofa Banana.png",
  "Paella 11.jpg",
  "Salada  de bacalhau com grão de bico 1.jpg",
  "Salada de bacalhau da casa ou tradicional 1.jpg",
  "Torta de bacalhau 11.JPG",
  "Torta de camarão 1.jpg",
  "torta-de-bacalhau.png",
  "Vinagrete Marisco.png"
];

const normalizedImageMap = new Map(
  imageManifest.map((fileName) => [normalizeText(fileName), `/Fotos/${fileName}`])
);

const extraAliases: Record<string, string> = {
  "bacalhau-a-moda": "/Fotos/Bacalhau à moda.JPG",
  "bacalhau-a-siqueira": "/Fotos/Bacalhau à Siqueira.jpg",
  "bacalhau-de-natas": "/Fotos/Bacalhau de natas.jpg",
  "bobo-de-camarao": "/Fotos/bobo-de-camarao-4.png",
  "camarao-ao-thermidor": "/Fotos/camarao-thermidor-2.png",
  "cuscuz-de-camarao": "/Fotos/Cuscuz de Camarão.JPG",
  "cuscuz-de-sardinha": "/Fotos/Cuscuz de sardinha 1.jpg",
  "farofa-de-banana": "/Fotos/Farofa Banana.png",
  paella: "/Fotos/Paella 11.jpg",
  "salada-de-bacalhau-com-grao-de-bico":
    "/Fotos/Salada  de bacalhau com grão de bico 1.jpg",
  "salada-de-bacalhau-da-casa":
    "/Fotos/Salada de bacalhau da casa ou tradicional 1.jpg",
  "torta-de-bacalhau": "/Fotos/torta-de-bacalhau.png",
  "torta-de-camarao": "/Fotos/Torta de camarão 1.jpg",
  "vinagrete-de-marisco": "/Fotos/Vinagrete Marisco.png"
};

export function resolveMenuImage(productName: string) {
  const normalizedProduct = normalizeText(productName);

  if (extraAliases[normalizedProduct]) {
    return extraAliases[normalizedProduct];
  }

  for (const [normalizedFileName, imagePath] of normalizedImageMap.entries()) {
    const normalizedWithoutExt = normalizedFileName.replace(
      /\.(jpg|jpeg|png|webp)$/i,
      ""
    );

    if (
      normalizedFileName.includes(normalizedProduct) ||
      normalizedWithoutExt.includes(normalizedProduct) ||
      normalizedProduct.includes(normalizedWithoutExt)
    ) {
      return imagePath;
    }
  }

  return undefined;
}
