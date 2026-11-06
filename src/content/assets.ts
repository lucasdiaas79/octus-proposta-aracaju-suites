/**
 * ATIVOS VISUAIS — troque os arquivos mantendo os nomes, ou aponte os imports para outros.
 * Fotos: site oficial do Aracajú Suites Hotel (aracajusuites.com.br). Uso definitivo depende de autorização.
 * Marca: arquivos oficiais Studio Octus.
 *
 * Papéis das fotos no modelo:
 *  hero      → capa, oportunidade, alavanca 1
 *  secondary → capa, alavanca 3, fechamento
 *  room      → capa, alavanca 2
 *  moment    → fechamento
 *  exterior  → reserva
 *  view      → alavanca 4
 */
import heroImg from '../assets/photos/01_rooftop_por_do_sol.jpg'
import secondaryImg from '../assets/photos/02_rooftop_dia_vista_mar.jpg'
import momentImg from '../assets/photos/03_brinde_rooftop.jpg'
import exteriorImg from '../assets/photos/05_fachada_vista_mar.jpg'
import viewImg from '../assets/photos/06_quarto_janela_vista_mar.jpg'
import roomImg from '../assets/photos/07_quarto_casal.jpg'
import logoLight from '../assets/brand/octus-logo.png'
import logoDark from '../assets/brand/octus-logo-dark.png'
import symbol from '../assets/brand/octus-symbol.png'

export type PhotoAsset = { id: string; alt: string; src: string; focus?: string }

export const photos = {
  hero: { id: '01_rooftop_por_do_sol', alt: 'Rooftop do Aracajú Suites ao pôr do sol', src: heroImg, focus: '55% 60%' },
  secondary: { id: '02_rooftop_dia_vista_mar', alt: 'Lounge do rooftop com vista para o mar', src: secondaryImg, focus: '62% 62%' },
  room: { id: '07_quarto_casal', alt: 'Quarto de casal do Aracajú Suites', src: roomImg, focus: '45% 55%' },
  moment: { id: '03_brinde_rooftop', alt: 'Brinde no rooftop com vista para o rio', src: momentImg, focus: '45% 45%' },
  exterior: { id: '05_fachada_vista_mar', alt: 'Prédio do Aracajú Suites com o mar ao fundo', src: exteriorImg, focus: '50% 40%' },
  view: { id: '06_quarto_janela_vista_mar', alt: 'Quarto com janela panorâmica para o mar', src: viewImg, focus: '55% 45%' },
} satisfies Record<string, PhotoAsset>

export const brand = { logoLight, logoDark, symbol, name: 'Studio Octus' }
