#version 460
#extension GL_EXT_multiview : require
#extension GL_GOOGLE_include_directive : require

#include "lovr.glsl"

void main() {
  Color = PassColor * VertexColor;
  float x = -1 + float((VertexIndex & 1) << 2);
  float y = -1 + float((VertexIndex & 2) << 1);
  UV = vec2(x, y) * .5 + .5;
  Position = vec4(x, y, 0., 1.);
  PointSize = 1.f;
}
