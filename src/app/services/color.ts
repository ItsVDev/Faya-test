import { Injectable } from '@angular/core';

export interface ColorItem {
  hexcode: string;
  color_name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colors: ColorItem[] = [
    {
      "hexcode": "#FF5733",
      "color_name": "Red Orange",
      "type": "standard"
    },
    {
      "hexcode": "#33FF57",
      "color_name": "Bright Green",
      "type": "oversea"
    },
    {
      "hexcode": "#3357FF",
      "color_name": "Royal Blue",
      "type": "standard"
    },
    {
      "hexcode": "#FF33A1",
      "color_name": "Hot Pink",
      "type": "oversea"
    },
    {
      "hexcode": "#33FFF6",
      "color_name": "Electric Cyan",
      "type": "standard"
    },
    {
      "hexcode": "#F3FF33",
      "color_name": "Lime Yellow",
      "type": "standard"
    },
    {
      "hexcode": "#8A33FF",
      "color_name": "Deep Violet",
      "type": "oversea"
    },
    {
      "hexcode": "#FF8F33",
      "color_name": "Tangerine",
      "type": "standard"
    },
    {
      "hexcode": "#33FF8A",
      "color_name": "Mint Green",
      "type": "standard"
    },
    {
      "hexcode": "#8F33FF",
      "color_name": "Amethyst",
      "type": "oversea"
    },
    {
      "hexcode": "#B833FF",
      "color_name": "Orchid",
      "type": "standard"
    },
    {
      "hexcode": "#FF338A",
      "color_name": "Fuchsia Pink",
      "type": "standard"
    },
    {
      "hexcode": "#338AFF",
      "color_name": "Sky Blue",
      "type": "oversea"
    },
    {
      "hexcode": "#FFB833",
      "color_name": "Goldenrod",
      "type": "standard"
    },
    {
      "hexcode": "#33FFB8",
      "color_name": "Aquamarine",
      "type": "oversea"
    },
    {
      "hexcode": "#FF3357",
      "color_name": "Scarlet",
      "type": "oversea"
    },
    {
      "hexcode": "#57FF33",
      "color_name": "Spring Green",
      "type": "standard"
    },
    {
      "hexcode": "#5733FF",
      "color_name": "Indigo",
      "type": "oversea"
    },
    {
      "hexcode": "#FF57A1",
      "color_name": "Coral Pink",
      "type": "standard"
    },
    {
      "hexcode": "#57FFF3",
      "color_name": "Turquoise Blue",
      "type": "standard"
    },
    {
      "hexcode": "#F3FF57",
      "color_name": "Chartreuse",
      "type": "oversea"
    },
    {
      "hexcode": "#8A57FF",
      "color_name": "Mauve",
      "type": "standard"
    },
    {
      "hexcode": "#FF8A57",
      "color_name": "Salmon",
      "type": "oversea"
    },
    {
      "hexcode": "#57FF8A",
      "color_name": "Emerald Green",
      "type": "standard"
    },
    {
      "hexcode": "#8F57FF",
      "color_name": "Periwinkle",
      "type": "oversea"
    },
    {
      "hexcode": "#B857FF",
      "color_name": "Lavender",
      "type": "standard"
    },
    {
      "hexcode": "#FF578A",
      "color_name": "Ruby Red",
      "type": "standard"
    },
    {
      "hexcode": "#578AFF",
      "color_name": "Denim Blue",
      "type": "oversea"
    },
    {
      "hexcode": "#FFB857",
      "color_name": "Apricot",
      "type": "standard"
    },
    {
      "hexcode": "#57FFB8",
      "color_name": "Sea Green",
      "type": "oversea"
    },
    {
      "hexcode": "#CC0000",
      "color_name": "Crimson Red",
      "type": "standard"
    },
    {
      "hexcode": "#00CC00",
      "color_name": "Forest Green",
      "type": "oversea"
    },
    {
      "hexcode": "#0000CC",
      "color_name": "Navy Blue",
      "type": "standard"
    },
    {
      "hexcode": "#CC00CC",
      "color_name": "Magenta",
      "type": "oversea"
    },
    {
      "hexcode": "#00CCCC",
      "color_name": "Teal",
      "type": "standard"
    },
    {
      "hexcode": "#CCCC00",
      "color_name": "Olive",
      "type": "standard"
    },
    {
      "hexcode": "#CC6600",
      "color_name": "Burnt Orange",
      "type": "oversea"
    },
    {
      "hexcode": "#66CC00",
      "color_name": "Lawn Green",
      "type": "standard"
    },
    {
      "hexcode": "#0066CC",
      "color_name": "Cerulean",
      "type": "oversea"
    },
    {
      "hexcode": "#CC0066",
      "color_name": "Maroon",
      "type": "standard"
    },
    {
      "hexcode": "#FFD700",
      "color_name": "Gold",
      "type": "standard"
    },
    {
      "hexcode": "#C0C0C0",
      "color_name": "Silver",
      "type": "oversea"
    },
    {
      "hexcode": "#CD7F32",
      "color_name": "Bronze",
      "type": "standard"
    },
    {
      "hexcode": "#808080",
      "color_name": "Gray",
      "type": "oversea"
    },
    {
      "hexcode": "#40E0D0",
      "color_name": "Turquoise",
      "type": "standard"
    },
    {
      "hexcode": "#E6E6FA",
      "color_name": "Lavender Mist",
      "type": "oversea"
    },
    {
      "hexcode": "#FAEBD7",
      "color_name": "Antique White",
      "type": "standard"
    },
    {
      "hexcode": "#FFEBCD",
      "color_name": "Blanched Almond",
      "type": "standard"
    },
    {
      "hexcode": "#F08080",
      "color_name": "Light Coral",
      "type": "oversea"
    },
    {
      "hexcode": "#2F4F4F",
      "color_name": "Dark Slate Gray",
      "type": "standard"
    }
  ];

  getColors(): ColorItem[] {
    return this.colors;
  }
}
