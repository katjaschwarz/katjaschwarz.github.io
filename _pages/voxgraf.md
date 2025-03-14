---
layout: project_page
permalink: /voxgraf/
title: VoxGRAF
subtitle: Fast 3D-Aware Image Synthesis with Sparse Voxel Grids
nav: true
nav_order: 2
horizontal: false

affiliation_names: [Max Planck Institute for Intelligent Systems, University of Tübingen, Zhejiang University]
affiliations:
  - author: Schwarz
    index: [1, 2]
  - author: Sauer
    index: [1, 2]
  - author: Niemeyer
    index: [1, 2]
  - author: Liao
    index: [3]
  - author: Geiger
    index: [1, 2]
bibkey: Schwarz2022NEURIPS
---

<!-- Import 3D model viewer -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<div style="text-align: center">
{% include video.liquid path="assets/img/voxgraf/teaser_60fps.mp4" class="img-fluid" controls=false autoplay=true
loop=true muted=true preload=true %}
</div>

<div class="section">
<div class="abstract">
    <h2 class="text-left text-secondary">
        Abstract & Method
    </h2>
    <p>
        State-of-the-art 3D-aware generative models rely on coordinate-based MLPs to parameterize 3D radiance fields. While demonstrating impressive results, querying an MLP for every sample along each ray leads to slow rendering. Motivated by recent results in voxel-based novel view synthesis, we consider a sparse voxel grid representations for fast and 3D-consistent generative modeling. To obtain a compact representation of the scene and allow for scaling to higher voxel resolutions, our model disentangles the foreground object (modeled in 3D) from the background (modeled in 2D). 
    </p>
    {% include figure.liquid path="assets/img/voxgraf/system.png" class="img-fluid" %}
    <p>
        In contrast to existing approaches, our method requires only a single forward pass to generate a full 3D scene. It hence allows for efficient rendering from arbitrary viewpoints while yielding 3D consistent results with high visual fidelity.
    </p>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
3D-aware Image Synthesis
</h2>
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
      {% include video.liquid path="assets/img/voxgraf/ffhq_60fps.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
      {% include video.liquid path="assets/img/voxgraf/afhq_60fps.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Sparse Voxel Grids
</h2>
<model-viewer bounds="tight" src="../assets/img/voxgraf/seed0017_views16.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="../assets/img/voxgraf/poster_seed17.png" shadow-intensity="2" style="width: 100%; height: 600px; background-color: #404040" exposure="0.2" shadow-softness="1" camera-orbit="330.09deg 74.82deg auto" auto-rotate> </model-viewer>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Background Removal
</h2>
{% include video.liquid path="assets/img/voxgraf/bg_removal_60fps.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>

<div class="section">
<h2 class="text-left text-secondary">
Latent Interpolation
</h2>
{% include video.liquid path="assets/img/voxgraf/interpolation_ffhq_60fps.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>

<div class="section">
<h2 class="text-left text-secondary">
Citation
</h2>
<div class="bibentry">
    {% bibliography --query @*[key={{page.bibkey}}]* -T bib_citationbox %}
</div>
</div>
