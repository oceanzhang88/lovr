#version 460
#extension GL_EXT_multiview : require
#extension GL_GOOGLE_include_directive : require

#include "lovr.glsl"

void main() {
  PixelColors[0] = Color * MaterialColor * getPixel(ColorTexture, UV);
}
