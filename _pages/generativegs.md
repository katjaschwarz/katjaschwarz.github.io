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
bibkey: Schwarz2025CVPR
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

{% include video.liquid path="assets/img/ggs/teaser.mp4" class="img-fluid" controls=false autoplay=true speed=2
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
    Baseline Comparison
</h2>
<p>
  We find that existing GAN-based approaches struggle with very low sample diversity (mode collapse) on multi-modal datasets with complex camera distributions like ImageNet.
  The results below show samples from WildFusion and <a href="https://snap-research.github.io/3dgp/">3DGP</a>, the strongest baseline, where each row corresponds to samples of one class.
  While 3DGP collapses and produces almost identical samples within classes, WildFusion produces diverse, high-quality samples because it builds upon Latent Diffusion Models.
</p>
<div class="row">
    <div class="col-md-6 col-sm-6 col-xs-6 gallery">
        <h4>GGS</h4>
        {% include video.liquid path="assets/img/wildfusion/blcomp_ours.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-6 col-sm-6 col-xs-6 gallery">
        <h4>ViewCrafter</h4>
        {% include video.liquid path="assets/img/wildfusion/blcomp_3dgp.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Autoencoder for Compression and Novel View Synthesis
</h2>
<p>
Our 3D-aware autoencoder performs both compression and enables novel-view synthesis. Notably, it is trained from large collections of unposed images without any direct multiview supervision.
The learned compressed 3D-aware latent space can then be used to train a latent diffusion model. In addition, we can leverage our autoencoder to more efficiently perform novel view synthesis for a single given image than common GAN-based methods relying on GAN-inversion.
We show pairs of input images and synthesized novel views from our autoencoder below.
</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
  <h4>ImageNet</h4>
        {% include video.liquid path="assets/img/wildfusion/ae1.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/wildfusion/ae2.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
  <h4>SDIP Dog/Horse/Elephant</h4>
        {% include video.liquid path="assets/img/wildfusion/ae_sdip.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Generated Samples
</h2>
<p>
We train a latent diffusion model on the compressed 3D-aware latent space of the 3D-aware autoencoder.
Our 3D-aware LDM enables high-quality 3D-aware image synthesis with reasonable geometry and strong distribution coverage / high sample diversity.
  </p>
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
      <h4>ImageNet</h4>
        {% include video.liquid path="assets/img/wildfusion/gen1.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/wildfusion/gen2.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
        {% include video.liquid path="assets/img/wildfusion/gen3.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
             {% include video.liquid path="assets/img/wildfusion/gen4.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 gallery">
      <h4>SDIP Dog/Horse/Elephant</h4>
              {% include video.liquid path="assets/img/wildfusion/gen_sdip.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
    </div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Interpolation
</h2>
<p>
Using WildFusion, we can interpolate in a semantically meaningful way between two given single images while simultaneously allowing to change the viewpoint. Note that the geometry also changes accordingly. Specifically, we encode two images into latent space, further encode into the diffusion model’s Gaussian prior space (inverse DDIM), interpolate the resulting encodings, and generate the corresponding 3D images along the interpolation path.
</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
    {% include video.liquid path="assets/img/wildfusion/interp.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
</div>
</div>

<div class="section">
<h2 class="text-left text-secondary">
Generative Resampling with Different Noise Levels
</h2>
<p>
We can further use WildFusion to perform 3D-aware generative image resampling. Given an image, we forward diffuse its latent encoding for varying numbers of steps and re-generate from the partially noised encodings. Depending on how far we diffuse, we control how strongly the sample adheres to the input image. For the samples below, we gradually increase the number of diffusion steps from left to right.
</p>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12 gallery">
    {% include video.liquid path="assets/img/wildfusion/refinement.mp4" class="img-fluid" controls=true autoplay=true loop=true muted=true preload=true width="100%" %}
</div>
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
