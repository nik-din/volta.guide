<template><div><h1 id="pragma" tabindex="-1"><a class="header-anchor" href="#pragma"><span>Pragma</span></a></h1>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">GCC <span class="token function">optimize</span><span class="token punctuation">(</span></span><span class="token string">"O3,unroll-loops,fast-math,trapv"</span><span class="token expression"><span class="token punctuation">)</span></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">GCC <span class="token function">target</span><span class="token punctuation">(</span></span><span class="token string">"popcnt,avx2,avx512bw"</span><span class="token expression"><span class="token punctuation">)</span></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>trap2</code> crasha con overflow.</p>
</div></template>


