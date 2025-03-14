---
layout: project_page
permalink: /ggs/
title: Generative Gaussian Splatting
subtitle: Generating 3D Scenes with Video Diffusion Priors
nav: true
nav_order: 2
horizontal: false

affiliation_names: [Meta Reality Labs]
affiliations:
  - author: Schwarz
    index: [1]
  - author: Mueller
    index: [1]
  - author: Kontschieder
    index: [1]
bibkey: Schwarz2025ggs
---

{% include figure.liquid path="assets/img/ggs/teaser.jpg" class="img-fluid" %}

<div class="caption">
    Given one or more input images, GGS leverages a video diffusion prior to directly generate a 3D radiance field parameterized via 3D Gaussian primitives. GGS first generates a feature field with a pose-conditional diffusion model and subsequently decodes the feature splats, yielding an explicit 3D representation of the generated scene.
</div>

<div class="section">
<div class="bibentry">
    {% bibliography --query @*[key={{page.bibkey}}]* -T bib_abstract %}
</div>
</div>

{% include video.liquid path="assets/img/ggs/ggs_teaser.mp4" class="img-fluid" controls=false autoplay=true speed=2
loop=true muted=true preload=true width="100%" %}

<div class="caption">
    3D scene generated with GGS from a single input image.
</div>

<div class="section">
<h2 class="text-left text-secondary">
    Generating 3D Scenes with Video Diffusion Priors
</h2>
<p>
    While existing pose-conditional video diffusion models models achieve high photorealism, they often lack 3D consistency and cannot directly synthesize 3D representations​. Instead, we propose to directly integrate an explicit 3D representation with a pre-trained latent video diffusion model.
    Our approach, GGS, improves 3D consistency in the generated images and naturally allows training with additional depth supervision where available.
    We further design a custom decoder that directly predicts the decoded 3D representation of the scene from the generated feature maps.
</p>
{% include figure.liquid path="assets/img/ggs/system.jpg" class="img-fluid" %}
<p>
Our approach, GGS, directly synthesizes a 3D representation, which is parameterized by a set of Gaussian splats \(\{\mathbf{g}^m\}\), from a set of posed input images. Specifically, during training we consider a set of posed images \(\{\mathbf{I}^m\}\) with associated camera poses \(\{\mathbf{p}^m\}\) and corresponding Pluecker embeddings \(\{\mathbf{P}^m\}\). The images are first encoded into a latent representation \(\{\mathbf{z}_0^m\}\), which is then partitioned into \(K\) reference images and \(L\) target images. We introduce noise only to the latents of the target images \(\{\mathbf{z}_{tgt,0}^l\}_{l=1}^L\), while leaving the reference images noise-free. To ensure compatibility with the pretrained image-to-video diffusion model, we duplicate the reference latents across the channel dimension and concatenate zeros for the target latents. The resulting latents, along with the noise level \(\sigma_t\) and Pluecker embeddings, are fed into a U-Net architecture that produces intermediate per-latent feature maps. These feature maps are subsequently processed by an epipolar transformer \(\mathcal{T}_{epi}\) to predict the parameters of the Gaussian feature splats \(\{\mathbf{g}^m\}\). We render both feature maps \(\{\mathbf{f}^m\}\) and low-resolution images \(\{\mathbf{I}_{LR}^m\}\) for the input views, as well as low-resolution images for \(J\) novel views \(\{\mathbf{I}_{nv,LR}^j\}_{j=1}^J\) to regularize the 3D representation. Finally, the rendered feature maps are decoded into a weighted combination of sample noise \(\mathbf{\xi}^m\) and input latent to predict the noise-free latents \(\{\hat{\mathbf{z}}_0^m\}\).
</p>
</div>

<div class="section">
<h2 class="text-left text-secondary">
    Technical Contributions
</h2>
<ul>
    <li>We propose an approach that <em>directly integrates an explicit 3D representation with a pre-trained latent video diffusion backbone</em>, thereby improving 3D consistency of the generated image sequences and allowing for training with additional depth supervision where available.</li>
    <li>We design a <em>custom decoder that directly predicts the decoded 3D representation</em> of the scene from the generated feature maps.</li>
    <li>We train a <em>conditional variant of our model that auto-regressively generates full scenes</em> from an arbitrary number of input views.</li>
</ul>
</div>

<div class="section">
<h2 class="text-left text-secondary">
    Sequence Synthesis From a Single Image
</h2>
<p>
  Existing pose-conditional diffusion models without 3D representation often struggle to generate 3D consistent sequences.
  While <a href="https://hehao13.github.io/projects-CameraCtrl/">CameraCtrl</a> can generate reasonable sequences, it might not accurately follow the given camera trajectory. E.g., compare the position of the chair in the lower part of the image at the end of the sequence. 
  <a href="https://drexubery.github.io/ViewCrafter/">ViewCrafter</a> follows the trajectory more closely but often fails to preserve the appearance of the content. It also relies on correct depth estimates and wrong depth prediction can result in artifacts in the generated sequences, see bottom row.
</p>
<div class="row">
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>Reference Image</h4>
        {% include figure.liquid path="assets/img/ggs/results/1_ref/10ad4fc499c48b38.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>GGS</h4>
        {% include video.liquid path="assets/img/ggs/results/1_ref/10ad4fc499c48b38_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>CameraCtrl</h4>
        {% include video.liquid path="assets/img/ggs/results/1_ref/10ad4fc499c48b38_cameractrl.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>ViewCrafter</h4>
        {% include video.liquid path="assets/img/ggs/results/1_ref/10ad4fc499c48b38_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
<div class="row">
<div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include figure.liquid path="assets/img/ggs/results/1_ref/179ff8424ec7ad13.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/179ff8424ec7ad13_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/179ff8424ec7ad13_cameractrl.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/179ff8424ec7ad13_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
<div class="row">
<div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include figure.liquid path="assets/img/ggs/results/1_ref/75d29d69b8.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/75d29d69b8_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/75d29d69b8_cameractrl.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/75d29d69b8_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
    3D Scene Synthesis From a Single Image
</h2>
<p>
  Below, we show 3D Gaussian splats generated from a single image using GGS. We also provide the reference images and generated feature splats.
</p>
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/ggs/results/1_ref/scene_synthesis_single.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
View Extrapolation From Two Images
</h2>
<p>
 <a href="https://geometric-rl.mpi-inf.mpg.de/latentsplat/">LatentSplat</a> performs well for small camera baselines but its GAN-based generative decoder struggles with large viewpoint extrapolations. Instead, our diffusion model can generate reasonable and consistent images also for larger extrapolations. Similar to the single image setting, ViewCrafter performs overall well wrt. the camera trajectory but can alter the generated content between frames.
</p>
<div class="row">
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>Reference Image</h4>
        {% include figure.liquid path="assets/img/ggs/results/2_ref/3ad4793daf6adc19.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>GGS</h4>
        {% include video.liquid path="assets/img/ggs/results/2_ref/3ad4793daf6adc19_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>CameraCtrl</h4>
        {% include video.liquid path="assets/img/ggs/results/2_ref/3ad4793daf6adc19_latentsplat.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        <h4>ViewCrafter</h4>
        {% include video.liquid path="assets/img/ggs/results/2_ref/3ad4793daf6adc19_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
<div class="row">
<div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include figure.liquid path="assets/img/ggs/results/2_ref/17a39d87a22ac1ec.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/17a39d87a22ac1ec_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/17a39d87a22ac1ec_latentsplat.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/17a39d87a22ac1ec_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
<div class="row">
<div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include figure.liquid path="assets/img/ggs/results/2_ref/e8e81396b6.png" class="img-fluid" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/e8e81396b6_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/e8e81396b6_latentsplat.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-3 col-sm-3 col-xs-3 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/e8e81396b6_vc.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
    3D Scene Synthesis From Two Images
</h2>
<p>
  Below, we compare the generated 3D scenes from two images for GGS and the strongest baseline ViewCrafter. Results were obtained by running Splatfacto as an off-the-shelf 3D reconstruction algorithm. 
  As GGS directly generates a 3D representation with its 3D decoder branch, we can leverage the generated 3D splats as initialization for the reconstruction.
</p>
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/scene_synthesis_two.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
    Autoregressive Scene Synthesis From Five Images
</h2>
<p>
  Lastly, we show results for the conditional vairant of our GGS model. We autoregressively generate larger scenes using only 5 reference images.
</p>
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/ggs/results/2_ref/scene_synthesis_autoregressive.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Citation
</h2>
<div class="bibentry">
    {% bibliography --query @*[key={{page.bibkey}}]* -T bib_citationbox %}
</div>
</div>
