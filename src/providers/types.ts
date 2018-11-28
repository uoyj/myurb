export type HomeView = "Padrao" | "Viagem" | "PertoDeMim" | "SelecionarCoordenadas"

/**
 * Representação de linha ônibus na API. Ocorrencias não são utilizadas na exibição de itinerários.
 */
export type tuplaLinha = {
    geojson?: string,
    apenas_cartao: string,
    categoria: string,
    codigo_linha: string;
    cor: string;
    nome_linha: string;
    ocorrencias?: any[];
}

/**
 * Representação de ponto ônibus na API.
 */
export type tuplaPonto = tuplaLinha & {
    tipo: string;
    numero_ponto: number;
    endereco: string;
}


/**
 * Representação na API de um horário de parada de uma linha num ponto de ônibus
 */
export type tuplaHorario = {
    adaptado: string;
    codigo_linha: string;
    numero_ponto: string;
    horario_saida: string;
    ponto: string;
    tipo_dia: string;
}

/**
 * Representação na API de uma rota simples.
 */
export type tuplaRota = {
    codigo_linha: string;
    dados_linha: tuplaLinha;
    dados_ponto_destino: tuplaPonto;
    dados_ponto_origem: tuplaPonto;
    direcao: string;
    info_rota: infoRota[];
}

export type infoRota = {
    geojson: string;
    numero_ponto: number;
    seq: number;
    codigo_linha: string;
}

export type tuplaCaminho = {
    accessibilityCoeficient: number;
    accumulatedDistance: number;
    distance: number;
    effort: number;
    latitude: number;
    longitude: number;
    routeId: number;
    sequence: number;
}

export type tuplaCrowdsourcingLinha = {
    nivel: number;
    tipo: number;
    codigo_linha: string;
    dia: string;
    horario: string;
    lat: number;
    lon: number;
}

export const API_URL = "https://myurb-myurb.a3c1.starter-us-west-1.openshiftapps.com";
//export const API_URL = "http://myurb-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com";