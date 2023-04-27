# What is Project Library?

This project uses an open API database from openlibrary.org to create a personal library search engine page. My focus was to implement key features such as filtering, pagination, and CRUD operations. Additionally, I incorporated new CSS styling elements such as three.js, react-spring, and framer-motion, along with several transition effects. To enhance user convenience, I added a download link on the bookmark page for users to extract their saved books. This allows users not only to search for books but also to generate a list of books directly from the page, which was created by mireu-san.

# Link

# Prerequisite

1. npm i
2. npm run dev (Not npm start!)

# How to use

1. Type in the keyword you want to search for in the search bar.
2. Once a book matching your keyword is found, a list of results will be displayed. You can use the search bar on this page to further filter your results or navigate to another page if available.
3. Select the checkbox next to any book you want to save as a favorite and add to your bookmarks.
4. When you go to the bookmark page, you can select the checkboxes next to the books you want to extract and save as a list in a txt file. Only the selected books will be extracted.

# Miscellaneous

The 3D modeling and other pictures do not belong to me.

# Contact

Please refer to my profile for more information.

# Screenshots

![main](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s1.jpg)
![result](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s2.jpg)
![bookmark](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s3.jpg)
![txt](https://github.com/mireu-san/project-library/blob/master/public/screenshot/s4.jpg)

```
project-library
├─ .eslintcache
├─ .eslintignore
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 6c364d9067ec1ea4b1377c229872a4afdde209
│  │  │  ├─ b12c8967a4ed2ba4083dc79f8c16b198d40497
│  │  │  └─ dbb11b846b92a94f6b53fe0dc2cd89602ec2c0
│  │  ├─ 02
│  │  │  ├─ 1243d50eaf54cc5a04c024bada9062414dd4ad
│  │  │  └─ 81a01bae781a27fee538d7da9b9c738b92f34c
│  │  ├─ 04
│  │  │  ├─ 1456ad9ddaa7a0ac950669d99f936f0f1d94ec
│  │  │  └─ 7cabfa82ea5fe271090cb5b9262b2bb06a9211
│  │  ├─ 05
│  │  │  ├─ 8a2e0d155c49707d1aff39b82e14679f47d2cf
│  │  │  └─ eb7b7908c0099da786120474f7d971576e6f71
│  │  ├─ 06
│  │  │  ├─ 5aae5ec832e16876e010a31fc7e95696c4f019
│  │  │  ├─ 65084f26fc890593fc0cc9598ba257edb3c97d
│  │  │  └─ da4a9d0bf689a4d8ba683995f2b5eb28b1a82b
│  │  ├─ 08
│  │  │  ├─ 661ddaeb0d884de362bee362181445c4b67bb1
│  │  │  └─ f651a485f55d37b6540560d9d68b3c16f13ecb
│  │  ├─ 09
│  │  │  ├─ 192c6a52f6f378dea0da161df8a39abd7e5194
│  │  │  ├─ 238989dd720cb27c2ce4d152188ccc8ca2e972
│  │  │  ├─ c89fd5d45492aa27da682a549a1951f36c4d1e
│  │  │  ├─ db6aa526900866614e2acb5f7afefdbad600c2
│  │  │  └─ ef8c9b9f5e05a1f4309d680827b3ac6bde7b2a
│  │  ├─ 0a
│  │  │  ├─ 2277a5a9c7d008845d882f059a8f1acb942ce7
│  │  │  └─ 9449604304ae8f5e6aeced8b815d7406fa0fc2
│  │  ├─ 0b
│  │  │  └─ 4b8683c2cf33393c18a03382ad99911f565131
│  │  ├─ 0c
│  │  │  └─ 34509062afb72d84a29aebefc820caa2f6bb08
│  │  ├─ 0d
│  │  │  └─ a92883c7a758df5e20b0747c9acf0e316f95b0
│  │  ├─ 0e
│  │  │  ├─ 5890a9ecd043b06189a860c5f0d9bc34ddeb49
│  │  │  ├─ a5e2be5e9ee1c920322ad914c8c7f20cd839da
│  │  │  └─ bc96845222c24d1386cbf5f362b72429b79b55
│  │  ├─ 0f
│  │  │  └─ 3a48b82d66e6f0f56a24e7cb7b1d7d6f216203
│  │  ├─ 10
│  │  │  └─ fd42a7692ee13f806821420429c382d48d561f
│  │  ├─ 11
│  │  │  └─ 7f40993e0b2f80a13c088f327976209875957c
│  │  ├─ 13
│  │  │  ├─ 7347c8feaf806bd0798d91f1fead60af402563
│  │  │  ├─ 80e290950cf4100316f160d238162338deae9c
│  │  │  └─ ae82ab8151cc9c411ea360e2111e421589bd8c
│  │  ├─ 14
│  │  │  ├─ 7481204f812753353ce565f95fba32d2b059ea
│  │  │  ├─ 8eff69749d01da0f6ed3928883dc26a15b678a
│  │  │  └─ e4b386dc8076a2c851f7d1b84c7b8e64ab107e
│  │  ├─ 15
│  │  │  └─ 70b08ca673af88f0a39e8df201d2099590eda2
│  │  ├─ 16
│  │  │  ├─ b65b76753b433d1c00d45870a59ed4e4ee9366
│  │  │  └─ eaa8dd702410ed623bee8e60037efc6ced2deb
│  │  ├─ 17
│  │  │  ├─ 341005b7f49a721593045f3f9fff6b416b95a8
│  │  │  ├─ 61097501e6544aa3f05b8c81a37674ec914e29
│  │  │  ├─ 6fd56569d7ed0f311bb9d36f534cbdf88e9828
│  │  │  └─ fe942f3811d968244196e164ba3c3e9a6aca98
│  │  ├─ 18
│  │  │  ├─ 2cdf4509eb1841bc35a828fea7d0984e55a5eb
│  │  │  └─ 3c021d6790a03c5eb48be2628a44b482d1ab84
│  │  ├─ 19
│  │  │  ├─ 27e59fb5ab022048ce0114bdefda4f20152329
│  │  │  └─ 9b8a4b6ffbb5784beaa196a4f142bb18d73d2a
│  │  ├─ 1a
│  │  │  └─ ef26d41ba68e778a692d276226903818fa8806
│  │  ├─ 1b
│  │  │  └─ 645d6d4649a15776fce03d32a6120b2e33974e
│  │  ├─ 1c
│  │  │  └─ f991a96990089baa982f60050de0c976bd46aa
│  │  ├─ 1d
│  │  │  ├─ 1a484d702edc9491c24d4bb322759dc65428c3
│  │  │  ├─ 250249f9438022e7759b7c12ef0173cace7122
│  │  │  ├─ 9301dec8f0273fa8d874ddb04fec1e0c92b9e6
│  │  │  ├─ a814c103a58c78668fca89565a324a2a49fc23
│  │  │  ├─ aafcf5806fb5f47076fbca90ab3bc72c9e2e6a
│  │  │  └─ d0083c8894fe3be89d2e93f2b57ffe34d2b971
│  │  ├─ 1e
│  │  │  ├─ caab8cee862f970376c9b210c74db8d219a744
│  │  │  ├─ db4e294c20a3e5e631bd173923ee59f9f22585
│  │  │  └─ fa69e25c3c3dacf5c78bb800837a9adabdbe24
│  │  ├─ 1f
│  │  │  └─ 69ec6b6436003dc53ae63bd534cc660d9afc4e
│  │  ├─ 20
│  │  │  └─ 76be6e1e79d801fc3295761b1d89c6379d45fa
│  │  ├─ 21
│  │  │  ├─ 6e0ed98f84c1d0ab1883b23ee82e4a6d4053d0
│  │  │  └─ e11243823ccb83788278bd7e5a36b3f790c67f
│  │  ├─ 22
│  │  │  └─ 3f41255eaa9566353d28e6ab177d9f97ccf27f
│  │  ├─ 23
│  │  │  ├─ 6a4e27f0d5ed0a44aa340989c2473efb0f54e4
│  │  │  └─ a3d65195e2b0344584cc7b3d048ea690eea0cc
│  │  ├─ 24
│  │  │  ├─ 42e4c53eb67fe81fb7a4c09489330e8bcb2a0d
│  │  │  ├─ 442751d3aaaddbea24fc329e9f6da707ed28bd
│  │  │  ├─ 4c24f33a1f7910f3df2e3b45b5740864ff9f35
│  │  │  ├─ 851af3e1629db8e2dc02145fc2623087345370
│  │  │  └─ ac1a530e7c5486e948fb5a8480190a439eeabd
│  │  ├─ 25
│  │  │  ├─ 529588ab614ca28b6eb875763b3f2959a341d4
│  │  │  └─ 7ad5a3db760833d174ef0b27bebca3a9ef52a0
│  │  ├─ 26
│  │  │  └─ 2fb42bcc200a97cd4105b2122f0c8e92103811
│  │  ├─ 27
│  │  │  ├─ 54efeabfb55ee1b4f9d367772507b5c0284e3b
│  │  │  ├─ b254510064dd630a752322620578766fb14fe2
│  │  │  └─ e4f27254ba934154f141f0c8c0358d3f9a68e1
│  │  ├─ 28
│  │  │  └─ b5e96c243c5d3b42689200987de923759e5d53
│  │  ├─ 29
│  │  │  └─ d0218d649932ba40854f67c5f3bdb5181c926b
│  │  ├─ 2a
│  │  │  └─ 0c2d288b0d6a27e5e4085167ba69283e9d9b09
│  │  ├─ 2b
│  │  │  ├─ 2f3dbc6acd2b859bf854a908d8faccf9d2a966
│  │  │  └─ f1d729af306e8ec4fa03ca4bdd2b87f77156de
│  │  ├─ 2c
│  │  │  └─ 93674ba895e3da5117db1c2b096bb46d9c1e64
│  │  ├─ 2d
│  │  │  ├─ ac6d57f2ae29791a208b104ba0b470be045885
│  │  │  └─ dc6a8c2e925bcdf44ba94d08a021b2fe3a5223
│  │  ├─ 2e
│  │  │  └─ 44217f218ca8d5522c76320a238dc71d4f3413
│  │  ├─ 2f
│  │  │  ├─ 2bc7d6af8298b6fa3cb54399175379eddab1cf
│  │  │  └─ 33cc05b7ce8e7eb705d85ccebef35f9c6b8cf7
│  │  ├─ 31
│  │  │  └─ 4be79cadb73bae55c87a6c7d09f91b50a659f6
│  │  ├─ 32
│  │  │  ├─ 3c354e80fbb4c255ee5748ad4a9da74aebde7d
│  │  │  └─ cb61ad37722ea378111a4fc2c0ced4c357c7d0
│  │  ├─ 34
│  │  │  └─ 2817222b68857ba66f46dab854f3b115310954
│  │  ├─ 36
│  │  │  ├─ 4820431b65db6ee0eb544b044ee8725f549869
│  │  │  └─ 6bc9c3232c4659227cd122bd84453d95dba02d
│  │  ├─ 37
│  │  │  ├─ 0e31e608d5545ff1c1aa10b45af44e13e18df1
│  │  │  ├─ 14639977f834de1c99594c2f2b7c458c11e6cc
│  │  │  └─ 46e61e219119694b2368332d3130b6cb65f886
│  │  ├─ 38
│  │  │  ├─ 27cf7d2542d1d1c57b6bf717eecb183e72d966
│  │  │  ├─ 37aec677865f0648d42c4945495b728f33c6e9
│  │  │  ├─ 7a059459bc65e9c2e72f3d1823191095ffd50a
│  │  │  └─ 7f0e8a03445673e3e3472ab1b1783c7fd3859d
│  │  ├─ 39
│  │  │  ├─ 0531f91d6d484e6ceb9346aaff0357cb7f8a0d
│  │  │  └─ 4ef3710314214b4b5a4e26327de2ef08f28498
│  │  ├─ 3a
│  │  │  └─ c5ce4bde7988231753cb36d56b989a07bdc708
│  │  ├─ 3b
│  │  │  ├─ 0bf0ca09834c14a61293db43e9febee4446958
│  │  │  ├─ 48ac84dff13474c4ac22f7c7e9440b74fc597e
│  │  │  ├─ 5a05d433cd5fc293795f6e88609256267228f4
│  │  │  ├─ c3267d17c3d229bc22e8976a9c1443ccfc88ad
│  │  │  └─ f4185298b14590aeb1c9bd2d3f7f449a09419e
│  │  ├─ 3c
│  │  │  ├─ ecce4b94ffefae1eeee0a434aeb44a870f700f
│  │  │  ├─ f081b8e58e52e9635c4754aa0e7e0fb4bfc96f
│  │  │  └─ f9552dedefbe64035e6552c36b4f22dcd5d9db
│  │  ├─ 3d
│  │  │  ├─ 0f7e654a3d45bcb327b7e398b0c5007c9cb713
│  │  │  ├─ 47e2e8878440807f9d31db0f509d3364a3f3fc
│  │  │  ├─ 6af1d450acc632bcdd4e8970d72ca3e92f59cf
│  │  │  ├─ daa49c02227b1fef317fccc732e7e39925d14d
│  │  │  └─ fa0c2e8879392a87a885e8f1b0ee637570037f
│  │  ├─ 3e
│  │  │  ├─ 508c225e59006638a2524123e610f2492dd22f
│  │  │  ├─ 7f00b29676292ccbfb55817614ea59824907ad
│  │  │  ├─ 8273a3a76a0e8527fd6a020843214a20294973
│  │  │  └─ e9e72dfe6a567201249846df6a69f8ca586897
│  │  ├─ 3f
│  │  │  └─ c97f69fffd40c6edf74c4ec64245853eab7965
│  │  ├─ 41
│  │  │  ├─ 0223e6a4f2390322b2efb44f3e87091b125c57
│  │  │  ├─ 39f6d86cd4f7934f8d31a8b75735fc2ff2f3dc
│  │  │  └─ fb1e5bfb48b3736f00f4d6a78ab4f384308c79
│  │  ├─ 44
│  │  │  ├─ ccac7d6fb8f5147f526f22a658e3aad3d8d2b3
│  │  │  └─ ed63e13e01eaab889bac42e97fba11d1db1adf
│  │  ├─ 46
│  │  │  ├─ 38773d11266643babd2b9f18c51b1207bdbf45
│  │  │  └─ 8d12d99dc2b70d6ca70d85b5a4bc42de6921aa
│  │  ├─ 49
│  │  │  ├─ 0e314900b69d2f07ab59b9b7218caf90830de3
│  │  │  ├─ 42f34e6b92a3fc969f7024014998755b67a3d8
│  │  │  ├─ c2815328ee6acfe46ced65b4f7b321638bfaec
│  │  │  ├─ cd945f74526a298bdf1bc5d319bbb0958dd45d
│  │  │  └─ efb725d925caa8b1accda0417edb424c7f9c98
│  │  ├─ 4a
│  │  │  └─ 7c37c3e8d9c7e39e568ef61ee8a192a132c9de
│  │  ├─ 4b
│  │  │  ├─ 13a58664cef1c3846c86b288ee909a19666b0c
│  │  │  └─ fa159f1258881d1b0755bb57aa167f7822e267
│  │  ├─ 4c
│  │  │  └─ 50801fd4fd01c045eba3bf90f2c87d83b943b1
│  │  ├─ 4e
│  │  │  ├─ 3e3a51b821ffd93c7891fc949d87b54132a990
│  │  │  ├─ 45adf0a98fcd635297ae28358cf8614ddc28b2
│  │  │  └─ b7a83e1970a055f454233e01eaffce56d71091
│  │  ├─ 4f
│  │  │  ├─ 6ba2baa239061b2f9a6a582425935faadfd0fb
│  │  │  ├─ bcf93089a4fce8c4b6049b509c6f5a1f954f7c
│  │  │  └─ be3ddf3157a4d887f805ab73122b21597e5cc9
│  │  ├─ 51
│  │  │  ├─ 179db0ca460198963cd25414502acecd6f0582
│  │  │  └─ 1cf57edb73b78a813ed50d0e699fc62512bee9
│  │  ├─ 52
│  │  │  ├─ bf9898fbabd5f2c90e2430c43e6de91589e3d6
│  │  │  └─ d3f1b6a45b36c85f661c222e49e659bda4cb2d
│  │  ├─ 53
│  │  │  ├─ 24944e753686d7ce2221663722b0783ed6a421
│  │  │  └─ 7c267758e5ae2dce50658f500109eb00f049ed
│  │  ├─ 54
│  │  │  └─ 3512bb4a892e798484c1f9650b46298814a832
│  │  ├─ 55
│  │  │  ├─ 3c26f039ba0d272492e18d7badfd574333361c
│  │  │  ├─ 6d117cf08d8ea447429de33932e316e78c54a8
│  │  │  ├─ af4c2bf560b85aaf594cb903ccb27bdf2c0fb3
│  │  │  └─ e25341c639872552cfac62c57bc8cefb631f32
│  │  ├─ 56
│  │  │  └─ cd9e188080c55e9a39a0cb7a65c9c5364f88a4
│  │  ├─ 57
│  │  │  └─ d7c4d5dee9e7fd694c4c7eec5ef8a8f5dd5dac
│  │  ├─ 58
│  │  │  ├─ 727bc5c25ede18dabf97e95be5bf1e0d8fd228
│  │  │  ├─ b1862000d7fab9eff7b0f85e1da2f17af44a0c
│  │  │  ├─ b4945dcda9f1855293e54cd4cb8eb2adb7c06c
│  │  │  └─ b89f5f7e2faf301c4decb5dfca4388df46bc0e
│  │  ├─ 59
│  │  │  ├─ a6980cee7bd41bcd0fdc84ec1b259c8b49cc7a
│  │  │  └─ d3136fb36e523670c25cbc97ea11481c311b55
│  │  ├─ 5a
│  │  │  ├─ 1af920ad1681f89440be2d03bf05e8dde4f9a9
│  │  │  ├─ 2e3b13abd1720a663ebcb215e1acbcb12e5483
│  │  │  └─ 3e712e32e8cb9dfd95888bf7faf5aa042450f6
│  │  ├─ 5b
│  │  │  └─ 02147812a8357cc2728809526af92741898fb3
│  │  ├─ 5c
│  │  │  ├─ acefa550848921aa1e167acbda355f9b71c22f
│  │  │  └─ bbcffd06370579df631184a71fb265e6cadb6f
│  │  ├─ 5d
│  │  │  └─ 20ff53e19e611412e47553d7431aba9d27eb0c
│  │  ├─ 5e
│  │  │  └─ 321ac64b923c0eaf4b5825712f3f9ec2225b19
│  │  ├─ 60
│  │  │  └─ a1b53ba8ba34a1d791553886571b3584b0e157
│  │  ├─ 61
│  │  │  ├─ 066ce324f66d941da7a03a7f1b001d47c16a33
│  │  │  ├─ 29c74b2c33bfbb89b86631be20c23b7c973e87
│  │  │  ├─ 41c66612117a4cafc5403d6146fe5a2a42b17a
│  │  │  └─ 8e20bcf646ddc340db4c38b7b0ca44eb299fcc
│  │  ├─ 63
│  │  │  ├─ 66c89d1ebf0c32ec716fc755eb065e019c0885
│  │  │  └─ f56653529e0c11f0c99101b0ef5e10bef2a9fc
│  │  ├─ 64
│  │  │  └─ aa8b82a3cbebbf1d62fc9c825fd201f17ca3b0
│  │  ├─ 65
│  │  │  ├─ 0465289ecc24f13939cd31f158ad3081d3f26a
│  │  │  ├─ 6570713944d3361d0565242cf2e6a76c92e158
│  │  │  ├─ 8d5b2152c4a240ac7150a00de65b1fdb910cca
│  │  │  └─ f6b383da089d2a086311eed255e7dd62b9692a
│  │  ├─ 66
│  │  │  ├─ 194d1239b04852472fc1e13143c196fa0cda22
│  │  │  ├─ 8899345ecb76a99993334400131cebe22c5fe8
│  │  │  └─ dfffa284d6dcb3554b659de405089080a29610
│  │  ├─ 68
│  │  │  ├─ 050fa1254b474592fd7cf52ae24d515d1bbe2a
│  │  │  ├─ 2ad157d39c621ab099e3b1a430a0b9c53b818a
│  │  │  ├─ 9720ee460878a54083689f24bd3055676eaaa5
│  │  │  └─ ee2e41f51aa3587a932c5bb7bd561778b98c03
│  │  ├─ 69
│  │  │  └─ 980dd9fb58b3b2421c3e706175a6f29c26d199
│  │  ├─ 6a
│  │  │  ├─ e1845f6cc6345991c13d00244ec14164d0f4eb
│  │  │  └─ e72d3d6c1681a6644f0e03823d13d165e357d8
│  │  ├─ 6b
│  │  │  ├─ 63495bda572220166ac707d7b85ca04124cd37
│  │  │  └─ 907a3b2af42c27c3c932b08dc259659ee4de80
│  │  ├─ 6c
│  │  │  ├─ 2e775240dcbaa43049abe4e0bfe3bdb47c0349
│  │  │  ├─ 87ea6e4724a9c0b8143d3365ca45cdc4df24ae
│  │  │  └─ e40dd4c0f17fe2b1f4007aea27600755dceabd
│  │  ├─ 6d
│  │  │  ├─ 1d2709f4069c04d5069c405e8c11967054be30
│  │  │  ├─ 2889b152780ecc4ce9fd8b3388f04973518433
│  │  │  ├─ 399c406671d67175c93ee263ae93de3ae12e20
│  │  │  └─ efe3ab470bebfee814073c3f9e44ff683190a4
│  │  ├─ 6e
│  │  │  ├─ 22d383455343f8392a1679367e7c4b00b92081
│  │  │  └─ 6648d88df04ca20960de205c91542f4e23e17a
│  │  ├─ 70
│  │  │  ├─ 1ea915a2914600eafa7231f9866d7f57c95118
│  │  │  ├─ 3ebf31b575e91a1594a39ed956f7f01d21d072
│  │  │  └─ ba786db84bd0473e8d8df00c579db680458acf
│  │  ├─ 71
│  │  │  ├─ 1073092f71b4f13a35e8909dafa3f2d88f7775
│  │  │  ├─ 5a0e615c2d13b3927e2dd167bdeecdab4589c6
│  │  │  ├─ af19fc1606bb39684d70367f1417b816ca2664
│  │  │  └─ e75a75a804e3ea0fac24b8d27d6ff26b13653e
│  │  ├─ 72
│  │  │  └─ a85ccbd665283576cf381e621d47f6e0fb41df
│  │  ├─ 73
│  │  │  └─ d2ab3396001a9e46588e1cf6ab5972eb2db647
│  │  ├─ 74
│  │  │  └─ 5fa64e76a7db33c4c42250c994bc0a3b7a4e1e
│  │  ├─ 75
│  │  │  ├─ 258b8e413d1d9e16cae1b7c56752b1ec76cec9
│  │  │  └─ 48ef3434e680d902642f7f2c64d24f518f8684
│  │  ├─ 76
│  │  │  └─ ab4e8565903b6a5f5ce545aa0cc88768522b16
│  │  ├─ 77
│  │  │  └─ 96286c66efb0f2b31c94e8db8a102f7e5ddab4
│  │  ├─ 79
│  │  │  ├─ 32b47d1bd2593f18d52923842cf60bf1f2a2f8
│  │  │  └─ 8d4f9e2a7ecac9fc8559f02d188d89debdaa34
│  │  ├─ 7a
│  │  │  ├─ 2fcb9041f32e5f29dc317bee3219b73cc31ce4
│  │  │  ├─ 729a7e9e7b21ae4e710e8748e3ff43bc68506b
│  │  │  └─ 927ec271d12758eb3129f3cb5afcc54a932755
│  │  ├─ 7b
│  │  │  ├─ 245078cb019d9f790b4c1b1d8cfa9d5dc282c1
│  │  │  ├─ 46f04d985186fdeab3d1386108d6e059370862
│  │  │  ├─ 674f7e33ca8fca684141ae0736c9651f611b0e
│  │  │  ├─ 751f122e35ef3260f9adc93fad930e41f18760
│  │  │  ├─ 953ab233d97eba3d8ddbdc38d14fa75c056337
│  │  │  └─ bf05be4cc937f89929afc857119514b435bc33
│  │  ├─ 7c
│  │  │  └─ 69b15631fee9924336cdbc7fddb7ec7bef91a5
│  │  ├─ 7d
│  │  │  ├─ 345783ff435f158aa361f21ec9ec2b50a5a1c8
│  │  │  ├─ 476af8c9c41fb4093aaa98ebce461d774204e4
│  │  │  └─ f9078c76ba84817fea0ddff4a57b2a08fb06ec
│  │  ├─ 7e
│  │  │  ├─ 20e4db582f1e3eddd13f2fb3a2462476f7545b
│  │  │  ├─ 288ab8b516e68a3eb0c051153550cd2ee1d43b
│  │  │  ├─ 4b9968f04ac22fd2f806c55085d26544b5b1a2
│  │  │  ├─ a115458492d223c38ad421774ba40812e5ab46
│  │  │  └─ ee1acf5e2c0b116977832e7e5f788496a86e69
│  │  ├─ 7f
│  │  │  └─ 8d6f6bb081748564e38955bf297e19d296060c
│  │  ├─ 80
│  │  │  ├─ bb904ae295068f0647aff0bbefbf97486c9d4d
│  │  │  └─ bf6a7bfbaeb288f60df0f98413dd6fa20a33cf
│  │  ├─ 82
│  │  │  ├─ 05c46cd3786c15a35494a51a6167037d67af5a
│  │  │  ├─ 92053045c2562552aba22f60307f1bd029ed58
│  │  │  ├─ be82f35bc10a9dbb8456b923ecbb01766f98e9
│  │  │  └─ e74c26b0399c2d3dd472a7e0a2278d380e10fc
│  │  ├─ 83
│  │  │  └─ 98a0651fb98871fc3a59afabe2f1e1357d6da1
│  │  ├─ 84
│  │  │  ├─ 4bff7ea23cfc291a54de4dcb8baf4c9bd1c241
│  │  │  ├─ b00816690ca24a7a6d08b92a908a21c5e49066
│  │  │  └─ dd5374f236bb892c8d29a6d8824e5d0b30087a
│  │  ├─ 85
│  │  │  ├─ 1daeccf2dc020864b8bde16f82d0e8833f4af8
│  │  │  └─ 94d9f27bb23b06eae43f29370d330a7b5a273a
│  │  ├─ 86
│  │  │  ├─ 227919826e67e5fa180abdd6a1b4d9033cb8dc
│  │  │  ├─ 3affc2d79ac062839b7d7297faa670faca2820
│  │  │  ├─ 3db4c12618777b0bf4285805733d5ee08979ed
│  │  │  ├─ 48c162bb2f2ca95c54de1489ac53a8f0aa25e0
│  │  │  └─ c54b9559015fb265733958bcfba92c8358324d
│  │  ├─ 87
│  │  │  ├─ 14ed029d04d8f57763397dd0b907ac108164cd
│  │  │  └─ f98cfb95cd5bbcd3c223ee82c05bdc5d322ef5
│  │  ├─ 88
│  │  │  └─ c844a3004c781e0d85483c547f14458d039977
│  │  ├─ 89
│  │  │  └─ db40a2279f0ff8f5396f7c54f99965e8b65193
│  │  ├─ 8a
│  │  │  ├─ 5d521d39f41b4d6027212df6b63757ffce321d
│  │  │  ├─ 827e762de5e1bdddacd691071192858f2fea66
│  │  │  ├─ 8ff54abb247295b2797d2f855574b40f88797a
│  │  │  ├─ f2cb71b04f2b32f245519d48b3c8fb3a449e61
│  │  │  └─ f621da920acce829bf3aac01dff495c70b5ab1
│  │  ├─ 8b
│  │  │  ├─ 48087ec12797219cf6bbea3d54ba9dda6e4033
│  │  │  └─ bbf513b5845cb208c7dc0cd6d193527e1f5cfd
│  │  ├─ 8c
│  │  │  ├─ 33dacc74f213b8c78a305889dbd6a8bc4f35df
│  │  │  └─ f97b2043b5a3daf8da80f72735e0786151475b
│  │  ├─ 8e
│  │  │  ├─ d27b3ca3783159bff099661d2c0eacbb3a6f8d
│  │  │  └─ fcb2e109ce82bf6f9e7d25a26e3d7beed66c95
│  │  ├─ 90
│  │  │  └─ 5e58c98682e3f0ff1d53b2ac3e753183bca9d7
│  │  ├─ 91
│  │  │  └─ f1c40d06564c68d8719e46b33b9f5ce79a55ee
│  │  ├─ 92
│  │  │  ├─ 8b11e7b817d8c7a8afe0fefabc7fb6045417b1
│  │  │  └─ eefbba49e0b825ac1506b4d178ee4eb529ad5d
│  │  ├─ 93
│  │  │  ├─ 55c8216fcf640665cf9728590584a6543fe9c7
│  │  │  ├─ 5851ab5e05a6d9c4d996b198d0223023178aaa
│  │  │  └─ 7f4c1dbe28ff10fbaf3a455d47a2890061af93
│  │  ├─ 94
│  │  │  └─ 7fdc9c6b25eea584548f9094fdeef55b1a3f77
│  │  ├─ 95
│  │  │  ├─ 3d9ad29b2acbab87e47948c8267a814ea16236
│  │  │  └─ dcee727f70a97d44aae87daa891d3d1fd754ee
│  │  ├─ 96
│  │  │  ├─ 00d85388e72fefa1e98dbcd223e8cbcca62a60
│  │  │  ├─ 5e9498bdf4b15a0a871e593ae7f787fe339b6e
│  │  │  └─ a54bebcb91b40a4049af7b10b446a751ba16d6
│  │  ├─ 97
│  │  │  ├─ 8931f20ed39d6f0dca6bbb86181259106f73e5
│  │  │  └─ 8e1c80acdcfe7e93e06b75ab7f3c87ddd99d00
│  │  ├─ 98
│  │  │  ├─ 2e446c30d9bb3ef5dab0e9f4ab540cf38d4acc
│  │  │  └─ d38ed3d96c9e38bc5ccae415877517fa43e9dd
│  │  ├─ 99
│  │  │  ├─ d3da0a948984969564db6a911ca3b3c348c52c
│  │  │  └─ f66422fe9ad855645190f8e87a7bf2d54e35a2
│  │  ├─ 9a
│  │  │  ├─ d914d92abd87a38e4ba9ad468d4916635a8500
│  │  │  └─ eaebc804f9b366dd3533acfbb136d21b6a26e4
│  │  ├─ 9c
│  │  │  └─ 4cb49b833e9a768f708729f846cee83c75fa9b
│  │  ├─ 9d
│  │  │  └─ fb63bf7c6f6920cb9637e032cc845a3c887dbe
│  │  ├─ 9e
│  │  │  ├─ 6550f98d2a81535ea788d8e5519c5ef7827309
│  │  │  ├─ b54ff0a2b25a7db52ba129315f9cf8c122789d
│  │  │  └─ cd9cc9cfa835b1c42020690e53abfb72ae99b4
│  │  ├─ 9f
│  │  │  └─ 9d79eaad5350ce16514d8e4de5a91f8f385a2c
│  │  ├─ a0
│  │  │  ├─ 56c38e345f9c2f4186740582a98ec1dea3e1a8
│  │  │  ├─ 700bf58a3204e34f94c1a4767516ab9506c14a
│  │  │  └─ c2934de4100b5477b5422f8a8d4362d961468d
│  │  ├─ a1
│  │  │  ├─ 0bb2c478117e45049251f7c38a155267391422
│  │  │  ├─ 0ce266ae93e241fadf0a1dc8e481a521ec03de
│  │  │  ├─ 3daf2556e3c6fb9d6a38e443fdf44ef32f2ef3
│  │  │  ├─ 5bf4590884b32f989ca141589ada75de9feae7
│  │  │  ├─ 5f14908bb24d6ecbd7bc284a5aaae519ef20a8
│  │  │  └─ c3813e8e96e729da5c5eeaffa0f4f68e42f5c1
│  │  ├─ a3
│  │  │  └─ 226c87f51820752e4aa8a079b1865f97d628b1
│  │  ├─ a4
│  │  │  └─ d09b463bca423947c3eb0453b43caf45f0871e
│  │  ├─ a5
│  │  │  └─ 59879dadae6f774182bc2dce6c68c88aad6d08
│  │  ├─ a7
│  │  │  ├─ a88fefda242da59741a65ef2fbdadd194009b1
│  │  │  └─ e6311f83ddbbf90eb6747045a13b5391356af7
│  │  ├─ a8
│  │  │  ├─ 330320f5bcbade79362a02af86f6327aad9263
│  │  │  └─ bc17219380fa0f8863b36df02e4c980d1e3941
│  │  ├─ a9
│  │  │  └─ de0f4d7bd851e410f0ff0f4edcc574c08cd693
│  │  ├─ aa
│  │  │  └─ 840abbbcff59cfd3fed79b406730fc6f9bfbd7
│  │  ├─ ab
│  │  │  ├─ 631ac3cd02077858c9194c5481e9051b38432e
│  │  │  ├─ 78d4b2cf18c8fc304df1f2617c24e60ecbac03
│  │  │  ├─ be68e6cbc8c4e625b4d2048a005b60ea4fa566
│  │  │  └─ f7de4a1323879c43eced2bf9bf48efdb6ec292
│  │  ├─ ac
│  │  │  ├─ 038a9cbd8ce847bc30ed7fa9ffbfae8e495228
│  │  │  └─ 4473294743f1603c497845413d525e2c4d4706
│  │  ├─ ae
│  │  │  ├─ 3c08dfdc2ee4d8791c8029a97399ad621fd53f
│  │  │  ├─ 4124bcd55feb9da43089c4f24b48458e2fd694
│  │  │  └─ 6cb35217e70459a7a39a284b41ca54e03e01a9
│  │  ├─ af
│  │  │  ├─ 149f6a9ad79dc9937d8fef037e257153ad07d7
│  │  │  └─ bbfb7c20359608b47b5a22092a00948ef11387
│  │  ├─ b0
│  │  │  └─ 5729b1f8347d89feee047016c348972fc4d56d
│  │  ├─ b2
│  │  │  ├─ 0358396e18d340fb8a71545c90e4af4e0c866d
│  │  │  └─ 44ce45f764dc64ad6ee73c862e093f5c51bcbc
│  │  ├─ b3
│  │  │  ├─ 5f23eb823aced3ca192dbc152a44155dfdfd6f
│  │  │  ├─ 71b27df719390e0f4023891f9775bcd7e30ab0
│  │  │  ├─ b54b3c34de6777b5d7ceb0cb4987357f5eed37
│  │  │  └─ d0f3850c4a2667badcfcfcf6d2080050631e9f
│  │  ├─ b4
│  │  │  ├─ 8eb464e50689388b39de28f6c1daf048e70e10
│  │  │  ├─ 9b55aff6c76e8716ca49589a4b5cd358501d46
│  │  │  ├─ a0013d02636703da3c0e1381467ecc3b6f5845
│  │  │  └─ e7fc5c85f9e665b001d2abf12ad16d45ce17fe
│  │  ├─ b5
│  │  │  ├─ 7ca075b60405e25ec79efc7d3739064377b54d
│  │  │  ├─ ab2c0fed912cf5606c05d0bf5e2a3d7be1440c
│  │  │  ├─ b4eb3c3cd1e554e06251574749b07a488b8ad7
│  │  │  └─ da2806ae0eb3a87d5b8fba842b1799b9f9cd59
│  │  ├─ b6
│  │  │  ├─ 11bc402cecd7ead9f68742d2c568ee50b8569e
│  │  │  ├─ 30c15d57644a7d35a9cead723a63ce7ad69887
│  │  │  ├─ 9d1361e1efab630c1513ac28edc82eba493a2c
│  │  │  ├─ a58cb96e467c3f9682ac1b72fb8d5255836e9b
│  │  │  └─ bb09226b2e4f480f77861d629f187528fe8529
│  │  ├─ b7
│  │  │  └─ 1df0ebd84eec4201f3c623fc5ac69dd8d26c34
│  │  ├─ b8
│  │  │  ├─ 1a9f26e6331c3113b3021f496dafc3f4464dc9
│  │  │  ├─ 1d962cfd18dddff44fc25a95b83b4436898b76
│  │  │  ├─ 71e8fee6b00efc4a253b1fdba5fc528f9eda51
│  │  │  └─ ff0c8ed3ee780d9ac554a5fbeae3f7d9f02584
│  │  ├─ ba
│  │  │  ├─ 03f9bfd3d52c1e40749e6c4d2e36c5d524fa97
│  │  │  ├─ 072b4ba4749a76788a7306a38caa9dfeddb7bd
│  │  │  ├─ 2e5dd0c53709b7f46694922582e91353791c42
│  │  │  ├─ 6051845999e5659e5ee64e765cd5b7039770f5
│  │  │  ├─ 8eec3d20eb2e768e33317264ed60275db03c02
│  │  │  └─ eb0431f1104601c7a0b9b065a1fdd7ba30a0d5
│  │  ├─ bd
│  │  │  ├─ 0eb5a456d010ba175aac64c0e3306bd8ec889d
│  │  │  ├─ 26d3638bfe473ab01d84f00017b3c23aaf1b2d
│  │  │  └─ 9bbff3a73b1554a706d3fa386954ca09561b70
│  │  ├─ bf
│  │  │  ├─ 2292e228d6b6a27fa6a2b4a2d3ca2396d89844
│  │  │  ├─ 5dc54acf857282affe88b9765fa4e9d0874e79
│  │  │  ├─ 89a0e98cec7989af644d87daf0c2f48e463296
│  │  │  └─ ecbff3cb0c43947c9dd0a49aca6b880ee6c828
│  │  ├─ c0
│  │  │  ├─ 080555a7b9117bab753dffac4fcf3a439df0bc
│  │  │  ├─ 7ebfe2dda674b97a1d9ba1ade2bf58416daa67
│  │  │  └─ b2c5fe7f31ce8e227a89c7de77bb75d8bdd9ee
│  │  ├─ c1
│  │  │  └─ 995dbc9ea5a229265943a4d5cb8cf4709aa8c2
│  │  ├─ c3
│  │  │  ├─ b6173c0f3d5f5bffc5fea481a7f6d33377e996
│  │  │  ├─ ed7dc7e41b433d0078be1c6063fc9f51e48184
│  │  │  └─ ff0375951afccdebf50e97ae4edd580033257a
│  │  ├─ c4
│  │  │  ├─ 5617e0b4f2b602dee681da55a7a4b61badff47
│  │  │  ├─ 7d2c37df89bc54de3f830ee5c759fa7baa7b5b
│  │  │  └─ effba8e38da1c8091cbb201303fa26fc9f137b
│  │  ├─ c5
│  │  │  ├─ 002954bca12a9b27f6f6781773b186ae9261c0
│  │  │  └─ d057586f13f6f7ec2e149b355a01c5b4f3c784
│  │  ├─ c8
│  │  │  ├─ 16b888a8414003c147c0b8deb3965d59ce816e
│  │  │  ├─ 6ddf57209662666c7ad636b979b6e897cf10f0
│  │  │  ├─ 81158d47487a90407a3e48c70b4c7e66e58669
│  │  │  ├─ 826f95a9bc4e3842f533f73fe8ad68bda2c2ab
│  │  │  ├─ 9f5764a6c4364b38aa28f15548ecb14d3d200d
│  │  │  └─ ffa9f7b00af820ac3e80eedbd3fef7258f3396
│  │  ├─ c9
│  │  │  └─ b4ccc23ed9d6a9400b1295b4e27651c44a97a4
│  │  ├─ ca
│  │  │  ├─ 0f908829e594a8688df8b70b5312229f3756ea
│  │  │  ├─ 3edf500a6b037bfbd239d74152c7d237642651
│  │  │  ├─ 556b0892e47e21e4c6c6fbeaebddcce9f293dc
│  │  │  ├─ 656ca0f49f582e1969dbe704afc549d6911800
│  │  │  ├─ 682cd8d5766e92f1f0bd8ae393e67a67a34f1a
│  │  │  └─ bf8bf2c21191e2f0583dae7049ee6b12cdf286
│  │  ├─ cb
│  │  │  └─ 2be49d00b3d4ccdd3e24325200308f162a640c
│  │  ├─ cc
│  │  │  └─ 90c2adb73e9b9276a7669548105203d0d21750
│  │  ├─ cd
│  │  │  └─ 70e7cd95f4540d7ac51b4aaa9169e5be82695e
│  │  ├─ ce
│  │  │  ├─ 5531829fad900b4c44827a1d0ef0f570c3f1fd
│  │  │  └─ 87f1ca09d97ee5b88fa1f969935bafe6a51a35
│  │  ├─ cf
│  │  │  ├─ 1d9d83117d7fa5601e00a2689c8b92d224fa01
│  │  │  └─ d9fd8cdfe719fad4294db2323b1fe0304e3363
│  │  ├─ d1
│  │  │  ├─ 9dd279eb25af23d356c7e8cc88efd98ebfffe2
│  │  │  └─ f379916eede52c61ee0fb6da7c0690e1d7bc29
│  │  ├─ d2
│  │  │  ├─ b340099538ab4da81d5b36d15cb523df21c99f
│  │  │  └─ cbf477a3448936378c6c27770c43f67c661453
│  │  ├─ d3
│  │  │  ├─ 6fdf52b8d91995e219e989d6be43345a2822a7
│  │  │  ├─ 7842ba46d52bc0ea23834ca31303b430c1754b
│  │  │  ├─ f86159960e19e189b5fe0bb209b8348bf80da6
│  │  │  └─ fbcc952c14ec8ae2e766293a8892c42e19fa68
│  │  ├─ d4
│  │  │  └─ b70e1a7dfb07999e7dcf069a41dfdffcccd470
│  │  ├─ d5
│  │  │  └─ 91aa142300f89d8e91ff3b3c80427902e85456
│  │  ├─ d6
│  │  │  ├─ a8d5359ff4c6450fe4e3c5621843095a08078b
│  │  │  └─ b298f547a9cc9f5b576eaeed4660526eb53ade
│  │  ├─ d7
│  │  │  └─ 14231a5b1685d42859bcc4758a649db7871083
│  │  ├─ d8
│  │  │  ├─ 1d47bbb643a2b943f1994d6dcda67a32c4eb23
│  │  │  └─ b39b7ec789833730f44ed9ce2cbcbcb6b6056d
│  │  ├─ d9
│  │  │  ├─ 0a2693707549d876ad15ccc5105959711ddc5c
│  │  │  └─ ab8156a60baaaac7396eb2ef9110c10609715e
│  │  ├─ da
│  │  │  └─ cdfdb869f19db3063141a6c7ccde2d3c8894cb
│  │  ├─ db
│  │  │  └─ 6f8ed293b7dea2daf31cd6ce517e5d815459ff
│  │  ├─ dc
│  │  │  └─ f9a3e3639bd14ff25981163f349a6555369ad4
│  │  ├─ dd
│  │  │  ├─ 1001ef4dbc1956e784b6610f44007aef7bbcb3
│  │  │  └─ 31e1dbb95252807c150a45e9071d9cdc1bd1f9
│  │  ├─ de
│  │  │  ├─ 4349f247fecc50d83550475f50fa11078452fc
│  │  │  ├─ 76f35b063adfb627569967631a854c41f97b63
│  │  │  └─ aa1bfa8e1eb5d5271747fac4dec9f93761b06f
│  │  ├─ df
│  │  │  └─ 2b91eeb54dc551e96660f086966b1bca7fe197
│  │  ├─ e0
│  │  │  └─ af12df56ad3fd3359921650d44334db08298cb
│  │  ├─ e1
│  │  │  ├─ 207e4ce29868826470ff8680914243e9b5b970
│  │  │  ├─ 7ec4ddc02b276413a73e8220d5da9b49fd8b77
│  │  │  ├─ ac0afc1da16416a445ab35a61965ac8b9c7746
│  │  │  ├─ b428681107c77ee308ff855c526bd93a3c2bd0
│  │  │  └─ dd9364061a78806e230896f6d46dd89124030a
│  │  ├─ e2
│  │  │  ├─ 0d41818d44dd5417daa01858fd2121e2a2310d
│  │  │  └─ 47136f2d1bb88be67f569d5f3c2a4250af0c9b
│  │  ├─ e3
│  │  │  └─ 9fff3f08795e60e35a1cb4bf6358a1a8466776
│  │  ├─ e6
│  │  │  ├─ 308b65c1d2c829270827748d89e60bd4d97814
│  │  │  ├─ ef62067c0d90849e9e0bb09ce9ed0e7c0a50d9
│  │  │  └─ fdfe2cdd76d3079f99ea404821d8ecc593df97
│  │  ├─ e7
│  │  │  ├─ 1c42bb74df1077b679f3efcb24389a1455c962
│  │  │  └─ 4482925898a4d8c3f78922b07a314b5bef2dac
│  │  ├─ e8
│  │  │  └─ ebe02977b57fe5452d0f4a1057d25ae4c886b8
│  │  ├─ ea
│  │  │  ├─ 53ab9cd73afd7c16dea6b3db4ccde9673225ff
│  │  │  └─ d896e01931a62a5054e33f24275dfd1654fd87
│  │  ├─ eb
│  │  │  ├─ 134523c24b3f68f72113a5c80ac39c0a50106b
│  │  │  └─ 29883ba6cdaa581eb2807cbe4ab73fdf4807be
│  │  ├─ ed
│  │  │  ├─ 320cb448134d14b932c617cdc692536046a988
│  │  │  └─ 3ddc0c2d44cd7ee593f0ad77aeda199de803f9
│  │  ├─ ee
│  │  │  └─ 05bee59f492e0d74717615ecfb927e07adc1fd
│  │  ├─ ef
│  │  │  ├─ 2850b5c5943e3fdc1f545fbc6b16040afe831d
│  │  │  └─ 2ae5486c69c8da430a91cdd5c67d9d7e145cf5
│  │  ├─ f0
│  │  │  └─ bffdec6a8dbb2b1b24b5b0c45dd24fb825951d
│  │  ├─ f1
│  │  │  ├─ 28ffcc61cae4d8069fa4f19584a0dbfc7257a5
│  │  │  ├─ 7d2e99d987f6252d506813d67c90b69a3e4d8e
│  │  │  ├─ eae96c6a0929852d3f561fdb553e8765e3d0e5
│  │  │  └─ f59b7bb623c7f8c1e7f043bb55ed7fd3fd0a5c
│  │  ├─ f3
│  │  │  ├─ 005bd929df9d611d545652f0e0b973b095da9d
│  │  │  └─ 7a705f21c5dde2f2d57cd05710c37d896a2fec
│  │  ├─ f4
│  │  │  ├─ 1d6dc6f77053485aa116393ceb087247dfd1a3
│  │  │  └─ 32678e14113c880bbd4efadd89950f52e2e816
│  │  ├─ f5
│  │  │  ├─ 3ae6e2b7381f2c81594f4490861cbe7a27cfa7
│  │  │  ├─ 9f6ba8cbe7a06ada5a5baa12d03d1dd6ceb301
│  │  │  └─ d12b0c747b7ee33c0b715ea69618261f0cd172
│  │  ├─ f6
│  │  │  └─ cb49ff44bd9785d45e2edb654669636b3fa250
│  │  ├─ f7
│  │  │  ├─ 30e658f342644e0f861ef4c9805737cfbcb2f3
│  │  │  ├─ 769a22bf9ef60bfbe5026933debaf1ba194204
│  │  │  └─ d9682cc95a2217e3a2cb54d54edafd76b020c2
│  │  ├─ f8
│  │  │  └─ 3fed815c63b5ec549d52e2cb22cfff02fb6065
│  │  ├─ f9
│  │  │  └─ 1d25ba12315156d202c0dd12d7218f1425d458
│  │  ├─ fa
│  │  │  └─ e21e1a60d7703e54bb0329ced37b7b61a515a3
│  │  ├─ fb
│  │  │  └─ 7e293b0f2e7b992648cf28db445983bf9c2a2c
│  │  ├─ fc
│  │  │  ├─ 45a27cbbe0ce40a7d685f9f04d3086851915f4
│  │  │  └─ e00c17acc871b5f2cfbbb557313e1f41b31630
│  │  ├─ fd
│  │  │  ├─ 097173a9c8c168687cb177d5e74bc91c85e61a
│  │  │  ├─ 8a11606a70fd23441bc4abbf3d810d06097bc9
│  │  │  └─ aae9b1f08dcd8d989fb67db5f19e5abd6392ed
│  │  ├─ fe
│  │  │  ├─ 21464787cca51674f6404c39b7d733990b6a24
│  │  │  ├─ 7875a2e72d8f23053e86a91b5844bfceb96d88
│  │  │  └─ f710892ad47358d76eb6c6f08c78c7e28f6f7c
│  │  ├─ ff
│  │  │  ├─ 4952dc49cb7842f222e6ff98997263d74392c5
│  │  │  └─ d98c827281ac3a0a80bfb0644a1083a2cae6d5
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-646c9e7b514b5bf17dadc92fe58dc7a7061e442f.idx
│  │     ├─ pack-646c9e7b514b5bf17dadc92fe58dc7a7061e442f.pack
│  │     ├─ pack-64dc0f0d01b4fc671564ede0610beceb326e0429.idx
│  │     └─ pack-64dc0f0d01b4fc671564ede0610beceb326e0429.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ package-lock.json
├─ package.json
├─ proxy.jsx
├─ public
│  ├─ bookshelf
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  ├─ scene.gltf
│  │  └─ textures
│  │     ├─ armchair_baseColor.png
│  │     ├─ armchair_metallicRoughness.png
│  │     ├─ armchair_normal.png
│  │     ├─ book_baseColor.jpeg
│  │     ├─ book_metallicRoughness.png
│  │     ├─ book_normal.jpeg
│  │     ├─ candle_baseColor.png
│  │     ├─ candle_normal.png
│  │     ├─ carpet_baseColor.png
│  │     ├─ carpet_metallicRoughness.png
│  │     └─ carpet_normal.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ paladin
│  ├─ paladin.glb
│  ├─ planet
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  ├─ scene.gltf
│  │  └─ textures
│  │     ├─ Clouds_baseColor.png
│  │     └─ Planet_baseColor.png
│  ├─ robots.txt
│  └─ screenshot
│     ├─ s1.jpg
│     ├─ s2.jpg
│     ├─ s3.jpg
│     └─ s4.jpg
├─ README.md
├─ src
│  ├─ components
│  │  ├─ BookDetails
│  │  │  ├─ BookDetails.css
│  │  │  └─ BookDetails.jsx
│  │  ├─ BookList
│  │  │  ├─ Book.jsx
│  │  │  ├─ BookList.css
│  │  │  └─ BookList.jsx
│  │  ├─ BookmarkList
│  │  │  ├─ BookmarkList.css
│  │  │  └─ BookmarkList.jsx
│  │  ├─ BookmarkModal
│  │  │  ├─ BookmarkModal.css
│  │  │  ├─ BookmarkModal.jsx
│  │  │  ├─ RemoveModal.css
│  │  │  └─ RemoveModal.jsx
│  │  ├─ canvas
│  │  │  ├─ Ball.jsx
│  │  │  ├─ Book.jsx
│  │  │  ├─ index.js
│  │  │  ├─ Paladin.jsx
│  │  │  └─ Stars.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.jsx
│  │  ├─ Loader
│  │  │  ├─ Loader.css
│  │  │  └─ Loader.jsx
│  │  ├─ Loader.jsx
│  │  ├─ Navbar
│  │  │  ├─ Navbar.css
│  │  │  └─ Navbar.jsx
│  │  ├─ Pagination
│  │  │  ├─ Pagination.css
│  │  │  └─ Pagination.jsx
│  │  └─ SearchForm
│  │     ├─ SearchForm.css
│  │     └─ SearchForm.jsx
│  ├─ context.jsx
│  ├─ custom.d.ts
│  ├─ images
│  │  ├─ about-img.jpg
│  │  ├─ book.svg
│  │  ├─ cover_not_found.jpg
│  │  ├─ home.webp
│  │  ├─ library-bg.gif
│  │  ├─ library-bg2.gif
│  │  ├─ library3.gif
│  │  ├─ loader.svg
│  │  ├─ loader2.svg
│  │  └─ note.svg
│  ├─ index.css
│  ├─ index.tsx
│  └─ pages
│     ├─ About
│     │  ├─ About.css
│     │  └─ About.jsx
│     └─ Home
│        ├─ Home.css
│        └─ Home.jsx
├─ tailwind.config.js
└─ tsconfig.json

```