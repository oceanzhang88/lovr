#version 460
#extension GL_EXT_multiview : require
#extension GL_GOOGLE_include_directive : require
#extension GL_EXT_samplerless_texture_functions : require

#include "lovr.glsl"

float screenPxRange() {
  vec2 screenTexSize = vec2(1.) / fwidth(UV);
  return max(.5 * dot(SDFRange, screenTexSize), 1.);
}

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  vec3 msdf = getPixel(ColorTexture).rgb;
  float sdf = median(msdf.r, msdf.g, msdf.b);
  float screenPxDistance = screenPxRange() * (sdf - .5);
  float alpha = clamp(screenPxDistance + .5, 0., 1.);
  if (alpha <= 0.) discard;
  PixelColors[0] = vec4(Color.rgb, Color.a * alpha);
}
