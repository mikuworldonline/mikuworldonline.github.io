// MMD 模型资源数据
// 类型就近定义，避免改动全局 src/types/index.d.ts

export interface MMDModel {
  id: string;
  title: string;
  description?: string;
  thumb_url: string;
  origin_url?: string;
  origin_site?: string;
  keywords?: string;
  author?: string;
}

// 真实 MMD 模型分享资源
// origin_url 指向真实模型分享页（Sketchfab / DeviantArt 等）
// thumb_url 为可公开访问的预览图（提交前已 curl 抽查返回 200）
export const mmdModels: MMDModel[] = [
  {
    id: "mmd-001",
    title: "Hatsune Miku (MMD Model)",
    description: "经典初音未来 MMD 模型，约 1.5 万面，可在 Sketchfab 在线预览并免费下载（CC 署名协议）。",
    thumb_url:
      "https://media.sketchfab.com/models/92448dece7d2479c8169bd5620057cf9/thumbnails/86432beb3a5e4ed78ca3298087a259bc/2382d59fb86c487a8913b143d81f311b.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/hatsune-miku-92448dece7d2479c8169bd5620057cf9",
    origin_site: "Sketchfab",
    author: "雨宮レン (@oscar3dmodel)",
    keywords: "初音未来,MMD,Hatsune Miku,Sketchfab,3D模型",
  },
  {
    id: "mmd-002",
    title: "Hatsune Miku (MikuMikuDance)",
    description: "MikuMikuDance 风格初音模型，约 2.3 万面、1.28 万顶点，适合 MMD 动画与场景渲染。",
    thumb_url:
      "https://media.sketchfab.com/models/b85632b1fc514618bed06a0c9982a7c9/thumbnails/59c1b2563bba4813a1a605761b2a7c5c/fa59038f04134887a5ed395b00cc3880.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/hatsune-miku-mikumikudance-b85632b1fc514618bed06a0c9982a7c9",
    origin_site: "Sketchfab",
    author: "雨宮レン (@oscar3dmodel)",
    keywords: "初音未来,MMD,MikuMikuDance,Sketchfab",
  },
  {
    id: "mmd-003",
    title: "TDA Append Miku (with bones)",
    description: "经典 Tda 式 Append 初音，带完整骨骼绑定，可直接导入做动作姿态调整。",
    thumb_url:
      "https://media.sketchfab.com/models/766e16e760a446c0a0b9ddf7b1afe3fd/thumbnails/bdefd3d91dee455fb56c10902cf5f909/ead62f2c1cb74a43913de43ca28576fa.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/tda-append-miku-with-bones-766e16e760a446c0a0b9ddf7b1afe3fd",
    origin_site: "Sketchfab",
    author: "zHairezt",
    keywords: "初音未来,MMD,TDA,Append,骨骼,Tda Append",
  },
  {
    id: "mmd-004",
    title: "Hatsune Miku Plushie",
    description: "Q 版初音玩偶造型模型，圆润可爱，适合用于轻松风格的 MMD 短片与表情包制作。",
    thumb_url:
      "https://media.sketchfab.com/models/22e25b5fbd444102a175c088e14eb541/thumbnails/bc656f2ac52e4f9b97116192ea7870a3/2626bc18c4fc46cda33b87c3a54bfa8a.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/hatsune-miku-plushie-22e25b5fbd444102a175c088e14eb541",
    origin_site: "Sketchfab",
    author: "revsworks",
    keywords: "初音未来,MMD,玩偶,Q版,Plushie",
  },
  {
    id: "mmd-005",
    title: "Megurine Luka (Project DIVA)",
    description: "巡音流歌 Project DIVA 造型 3D 模型，可在 Sketchfab 免费下载，适合与初音组成同台演出场景。",
    thumb_url:
      "https://media.sketchfab.com/models/84b4608860c8466cbb013808d1229864/thumbnails/b75a8c2d91e447f1a4df5ce5f219a4a8/71ff2f1f46ec4eb3a4242405ec1752f4.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/hatsune-miku-project-diva-megurine-luka-84b4608860c8466cbb013808d1229864",
    origin_site: "Sketchfab",
    author: "雨宮レン (@oscar3dmodel)",
    keywords: "巡音流歌,Megurine Luka,MMD,Project DIVA,Vocaloid",
  },
  {
    id: "mmd-006",
    title: "Megurine Luka (Project Sekai)",
    description: "巡音流歌 Project Sekai 风格模型，提供 FBX / OBJ 格式，CC 署名协议免费下载。",
    thumb_url:
      "https://media.sketchfab.com/models/d508889f228c4cef952c0668042204e4/thumbnails/2fd6ef012f7d4b93b0bca2b3fa1c2428/335abe113f154187b18734adbb1a0831.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/megurine-luka-project-sekai-d508889f228c4cef952c0668042204e4",
    origin_site: "Sketchfab",
    author: "雨宮レン (@oscar3dmodel)",
    keywords: "巡音流歌,Megurine Luka,MMD,Project Sekai,Vocaloid",
  },
  {
    id: "mmd-007",
    title: "Hatsune Miku 3D Model",
    description: "高清初音未来 3D 模型，造型还原度高，可在 Sketchfab 在线预览模型细节。",
    thumb_url:
      "https://media.sketchfab.com/models/70a7b23a5e2b4abe8c84f393fa51f4b5/thumbnails/ef284c78e5dd4a09a891bebe02767e15/5e19c0dd23dc41ffaf4967a39abc5171.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/hatsune-miku-70a7b23a5e2b4abe8c84f393fa51f4b5",
    origin_site: "Sketchfab",
    author: "Pokkenjake2021",
    keywords: "初音未来,MMD,Hatsune Miku,Sketchfab,3D",
  },
  {
    id: "mmd-008",
    title: "Miku Hatsune Rig",
    description: "已绑定骨骼（rig）的初音模型，适合直接接入动画工作流进行姿态与动作调试。",
    thumb_url:
      "https://media.sketchfab.com/models/a393a4f3613143f09834705eb6a61d31/thumbnails/7e3121fa9a00475aaf229d4997d822b8/62040a101ac24b0f8276e5fe94251305.jpeg",
    origin_url:
      "https://sketchfab.com/3d-models/miku-hatsune-rig-a393a4f3613143f09834705eb6a61d31",
    origin_site: "Sketchfab",
    author: "A-Z inc. (@AnimeLover200)",
    keywords: "初音未来,MMD,Rig,骨骼绑定,Hatsune Miku",
  },
  {
    id: "mmd-009",
    title: "TDA Append Shine Rin",
    description: "Tda Append 风格镜音铃（Rin）模型，闪亮配色，DeviantArt 提供 MMD 下载。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/916146ad-8241-4448-b4ca-deec09c88484/da2vyo5-bb364277-3398-4f3b-ba4d-e0a01707adc8.png/v1/fill/w_1192,h_670,q_70,strp/tda_append_shine_rin__mmd_dl__by_czkitani_da2vyo5-pre.jpg",
    origin_url:
      "https://www.deviantart.com/czkitani/art/TDA-APPEND-SHINE-RIN-MMD-DL-609512261",
    origin_site: "DeviantArt",
    author: "czkitani",
    keywords: "镜音铃,Kagamine Rin,MMD,TDA,Append,Vocaloid",
  },
  {
    id: "mmd-010",
    title: "Teto Kasane Edits (5 Model Pack)",
    description: "重音 Teto 编辑版 5 件套模型包，含多套服装造型，适合多角色 MMD 场景搭配。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b5ac44cd-c5d1-4ded-8114-464b71d1aee4/depanm0-bb40c5d4-8a45-4365-a451-83050657ef46.png/v1/fill/w_1264,h_632/_mmd_dl__teto_kasane_edits__5_model_pack__by_chee_shep_depanm0-pre.png",
    origin_url:
      "https://www.deviantart.com/chee-shep/art/MMD-DL-Teto-Kasane-Edits-5-Model-Pack-889014024",
    origin_site: "DeviantArt",
    author: "Chee-shep",
    keywords: "重音Teto,Teto Kasane,MMD,模型包,UTAU",
  },
  {
    id: "mmd-011",
    title: "Hatsune Miku CrossWorlds",
    description: "初音「CrossWorlds」联动造型模型，附头发、胸部与服饰物理，并带专属载具 Diva Macchina。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2a152e3c-fc2f-47d8-85a8-049fd02c8bde/dkt9vm0-54901e40-5d6f-4ca6-971e-0583b64950d9.jpg/v1/fill/w_1192,h_670,q_70,strp/_mmd_model__hatsune_miku__crossworlds__download_by_sab64_dkt9vm0-pre.jpg",
    origin_url:
      "https://www.deviantart.com/sab64/art/MMD-Model-Hatsune-Miku-CrossWorlds-Download-1258493256",
    origin_site: "DeviantArt",
    author: "SAB64",
    keywords: "初音未来,MMD,CrossWorlds,物理,Hatsune Miku",
  },
  {
    id: "mmd-012",
    title: "TDA Miku Hatsune Edit",
    description: "基于 Tda 初音的二次编辑版本，调整了配色与材质，DeviantArt 提供 MMD 下载。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7f630caa-af6d-41ae-b210-cf4c55e3fd2a/dbdj9pv-1a37f012-1b19-4d24-88f2-357ed9969ffd.png/v1/fill/w_1192,h_670,q_70,strp/_mmd_download__tda_miku_hatsune_edit_by_silverdreamyrose_dbdj9pv-pre.jpg",
    origin_url:
      "https://www.deviantart.com/silverdreamyrose/art/MMD-Download-TDA-Miku-Hatsune-Edit-687862003",
    origin_site: "DeviantArt",
    author: "SilverDreamyRose",
    keywords: "初音未来,MMD,TDA,编辑版,Hatsune Miku",
  },
  {
    id: "mmd-013",
    title: "Animasa Miku Toon Edit",
    description: "Animasa（标准式）初音的卡通描边编辑版，自定义 toon 贴图，复古 MMD 质感。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/958b5b4f-90c5-4c1b-af23-930090ae72aa/d5kzzyb-699fb9d5-71fe-48db-b249-26d2f63d4fc4.png/v1/fill/w_1000,h_384,q_80,strp/mmd___animasa_miku_edit___dl__read_description___by_kyoshishion_d5kzzyb-fullview.jpg",
    origin_url:
      "https://www.deviantart.com/kyoshishion/art/MMD-Animasa-Miku-Edit-DL-Read-Description-337602755",
    origin_site: "DeviantArt",
    author: "KyoshiShion",
    keywords: "初音未来,MMD,Animasa,标准式,Toon",
  },
  {
    id: "mmd-014",
    title: "Animasa Miku Edit",
    description: "经典 Animasa 标准式初音的编辑版本，含常规版与不同眼睛贴图版，适合新手入门。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/6d4c9459-0141-4ba9-bd33-bc83da8fede6/d4ieqv9-302e0c13-b34c-4496-93f1-5defe623e480.png/v1/fill/w_1156,h_691,q_70,strp/mmd___animasa_miku_edit___dl_by_ayodan_d4ieqv9-pre.jpg",
    origin_url:
      "https://www.deviantart.com/ayodan/art/MMD-Animasa-Miku-Edit-DL-272785797",
    origin_site: "DeviantArt",
    author: "Ayodan",
    keywords: "初音未来,MMD,Animasa,标准式,入门",
  },
  {
    id: "mmd-015",
    title: "TDA Miku Append (Motion Trace)",
    description: "Tda Append 初音配套动作 trace 资源页，含模型与动作数据，方便快速做出演出动画。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/cb3daa4d-166a-482d-a338-8f919cd21a36/deyw07u-a4bb679f-dea7-432b-8dec-33a4ad3f3998.png/v1/fill/w_1192,h_670/tda_miku_append_motion_trace_dl_by_elinital_deyw07u-pre.png",
    origin_url:
      "https://www.deviantart.com/elinital/art/TDA-Miku-Append-Motion-Trace-DL-905126682",
    origin_site: "DeviantArt",
    author: "Elinital",
    keywords: "初音未来,MMD,TDA,Append,动作,Motion",
  },
  {
    id: "mmd-016",
    title: "LAT Hatsune Miku Edit",
    description: "LAT 式初音编辑版，重做了材质贴图，LAT 风格圆润可爱，DeviantArt 提供 MMD 下载。",
    thumb_url:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b5ac44cd-c5d1-4ded-8114-464b71d1aee4/deoyoqs-019a8d48-ab97-4b67-9595-85dd8c640cee.png/v1/fill/w_1154,h_692,q_70,strp/_mmd_dl__lat_hatsune_miku_edit_by_chee_shep_deoyoqs-pre.jpg",
    origin_url:
      "https://www.deviantart.com/chee-shep/art/MMD-DL-LAT-Hatsune-Miku-Edit-888455620",
    origin_site: "DeviantArt",
    author: "Chee-shep",
    keywords: "初音未来,MMD,LAT,编辑版,Hatsune Miku",
  },
];
