*              错误报告: https://www.tslang.cn/docs/handbook/error.html
*              配置参考: https://www.typescriptlang.org/docs/handbook/compiler-options.html
*     webpack&react: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
*     ts  官网: https://www.typescriptlang.org
*     typescript 很依赖 @types 所以你在使用某些类库或者 API 时要使用对应 @types
*     依赖包:
*     "ts-loader": "^6.1.0",
*     "@types/react": "^16.9.2",
*     "@types/react-dom": "^16.9.0",
*     "typescript": "^3.6.3",
*     "source-map-loader": "^0.2.4",
<table>
  <thead>
    <tr>
      <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font></font></th>
      <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型</font></font></th>
      <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font></th>
      <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--allowJs</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许编译JavaScript文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--allowSyntheticDefaultImports</code></td>
      <td><code>boolean</code></td>
      <td><code>module === "system"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 要么 </font></font><code>--esModuleInterop</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许从模块进行默认导入而没有默认导出。</font><font style="vertical-align: inherit;">这不影响代码发出，仅影响类型检查。</font></font></td>
    </tr>
    <tr>
      <td><code>--allowUmdGlobalAccess</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许从模块访问UMD全局变量。</font></font></td>
    </tr>
    <tr>
      <td><code>--allowUnreachableCode</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要报告无法访问的代码错误。</font></font></td>
    </tr>
    <tr>
      <td><code>--allowUnusedLabels</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要在未使用的标签上报告错误。</font></font></td>
    </tr>
    <tr>
      <td><code>--alwaysStrict</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以严格模式解析并</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每个源文件</font><font style="vertical-align: inherit;">发出</font></font></td>
    </tr>
    <tr>
      <td><code>--baseUrl</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本目录，用于解析非相对模块名称。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./module-resolution.html#base-url"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块分辨率文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--build</code><br><code>-b</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成此项目及其由</font></font><a href="./project-references.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Project References</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定的所有依赖项</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，此标志与此页面上的其他标志不兼容。</font><a href="./project-references.html"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">查看更多</font></font><a href="./project-references.html"><font style="vertical-align: inherit;"></font></a></td>
    </tr>
    <tr>
      <td><code>--charset</code></td>
      <td><code>string</code></td>
      <td><code>"utf8"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入文件的字符集。</font></font></td>
    </tr>
    <tr>
      <td><code>--checkJs</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的</font><font style="vertical-align: inherit;">错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">与结合使用</font></font><code>--allowJs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--composite</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保TypeScript可以确定在哪里可以找到引用项目的输出以编译项目。</font></font></td>
    </tr>
    <tr>
      <td><code>--declaration</code><br><code>-d</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成相应的</font></font><code>.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--declarationDir</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的声明文件的输出目录。</font></font></td>
    </tr>
    <tr>
      <td><code>--declarationMap</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每个相应的“ .d.ts”文件生成一个源映射。</font></font></td>
    </tr>
    <tr>
      <td><code>--diagnostics</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示诊断信息。</font></font></td>
    </tr>
    <tr>
      <td><code>--disableSizeLimit</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用JavaScript项目的大小限制。</font></font></td>
    </tr>
    <tr>
      <td><code>--downlevelIteration</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">针对ES5或ES3时，可扩展，扩展和销毁中的</font><font style="vertical-align: inherit;">可迭代项提供全面支持</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--emitBOM</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在输出文件的开头发出UTF-8字节顺序标记（BOM）。</font></font></td>
    </tr>
    <tr>
      <td><code>--emitDeclarationOnly</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅发出“ .d.ts”声明文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--emitDecoratorMetadata</code><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[1]</font></font></sup></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出设计类型的元数据，以在源代码中进行修饰的声明。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://github.com/Microsoft/TypeScript/issues/2577"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2577</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--esModuleInterop</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Emit </font></font><code>__importStar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>__importDefault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Helper用于运行时Babel生态系统兼容性，并实现</font></font><code>--allowSyntheticDefaultImports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型系统兼容性。</font></font></td>
    </tr>
    <tr>
      <td><code>--experimentalDecorators</code><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[1]</font></font></sup></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为ES装饰器启用实验性支持。</font></font></td>
    </tr>
    <tr>
      <td><code>--extendedDiagnostics</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示详细的诊断信息</font></font></td>
    </tr>
    <tr>
      <td><code>--forceConsistentCasingInFileNames</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止对同一文件使用大小写不一致的引用。</font></font></td>
    </tr>
    <tr>
      <td><code>--generateCpuProfile</code></td>
      <td><code>string</code></td>
      <td><code>profile.cpuprofile</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在给定路径下生成CPU配置文件。</font><font style="vertical-align: inherit;">传递现有的目录名称而不是文件路径将导致在该目录中生成以时间戳命名的配置文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--help</code><br><code>-h</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印帮助信息。</font></font></td>
    </tr>
    <tr>
      <td><code>--importHelpers</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进口发出佣工（例如</font></font><code>__extends</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>__rest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等..）从</font></font><a href="https://www.npmjs.com/package/tslib"><code>tslib</code></a></td>
    </tr>
    <tr>
      <td><code>--incremental</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>composite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开，</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则</font></font></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将先前编译中的信息读/写到磁盘上的文件来启用增量编译。</font><font style="vertical-align: inherit;">该文件由</font></font><code>--tsBuildInfoFile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">控制</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--inlineSourceMap</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出带有源映射的单个文件，而不是拥有单独的文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--inlineSources</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在单个文件中将源代码与源映射一起发射；</font><font style="vertical-align: inherit;">要求</font></font><code>--inlineSourceMap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>--sourceMap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要设置。</font></font></td>
    </tr>
    <tr>
      <td><code>--init</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化TypeScript项目并创建</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--isolatedModules</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行其他检查，以确保单独的编译（例如使用</font></font><a href="https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-simple-transform-function"><code>transpileModule</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://babeljs.io/docs/en/babel-plugin-transform-typescript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ babel / plugin-transform-typescript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）是安全的。</font></font></td>
    </tr>
    <tr>
      <td><code>--jsx</code></td>
      <td><code>string</code></td>
      <td><code>"preserve"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持JSX的</font></font><code>.tsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font><code>"react"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"preserve"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"react-native"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见</font></font><a href="./jsx.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--jsxFactory</code></td>
      <td><code>string</code></td>
      <td><code>"React.createElement"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定在响应React JSX发出时要使用的JSX工厂函数，例如</font></font><code>React.createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>h</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--keyofStringsOnly</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅解析</font></font><code>keyof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为字符串值的属性名称（不包含数字或符号）。</font></font></td>
    </tr>
    <tr>
      <td><code>--lib</code></td>
      <td><code>string[]</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要包含在编译中的库文件列表。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的值有：   </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES5</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES6</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES7</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2016</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017</code>  <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2018</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ESNext</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>DOM</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>DOM.Iterable</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>WebWorker</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ScriptHost</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Core</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Collection</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Generator</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Iterable</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Promise</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Proxy</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Reflect</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Symbol</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2015.Symbol.WellKnown</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2016.Array.Include</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017.object</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017.Intl</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017.SharedMemory</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017.String</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2017.TypedArrays</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2018.Intl</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2018.Promise</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ES2018.RegExp</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ESNext.AsyncIterable</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ESNext.Array</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ESNext.Intl</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>ESNext.Symbol</code> <br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果</font></font><code>--lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未指定库的默认列表是注射。</font><font style="vertical-align: inherit;">注入的默认库为：   </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►对于</font></font><code>--target ES5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>DOM,ES5,ScriptHost</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  ►对于</font></font><code>--target ES6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>DOM,ES6,DOM.Iterable,ScriptHost</code></td>
    </tr>
    <tr>
      <td><code>--listEmittedFiles</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在编译过程中打印生成文件的名称。</font></font></td>
    </tr>
    <tr>
      <td><code>--listFiles</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印文件名称的一部分。</font></font></td>
    </tr>
    <tr>
      <td><code>--locale</code></td>
      <td><code>string</code></td>
      <td><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（特定于平台）</font></font></em></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于显示错误消息的语言环境，例如en-us。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的值为：   </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►英语（美国）：</font></font><code>en</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►捷克语：</font></font><code>cs</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►德语：</font></font><code>de</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►西班牙语：</font></font><code>es</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►法语：</font></font><code>fr</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►意大利语：</font></font><code>it</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►日语：</font></font><code>ja</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►韩语：</font></font><code>ko</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►波兰语：</font></font><code>pl</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►葡萄牙语（巴西）：</font></font><code>pt-BR</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►俄语：</font></font><code>ru</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►土耳其语：</font></font><code>tr</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►简体中文：</font></font><code>zh-CN</code>  <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►繁体中文：</font></font><code>zh-TW</code></td>
    </tr>
    <tr>
      <td><code>--mapRoot</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定调试器应定位地图文件的位置，而不是生成的位置。</font><font style="vertical-align: inherit;">如果.map文件在运行时位于与.js文件不同的位置，请使用此标志。</font><font style="vertical-align: inherit;">指定的位置将嵌入到sourceMap中，以将调试器定向到地图文件所在的位置。</font><font style="vertical-align: inherit;">该标志将不会创建指定的路径，也不会在该位置生成地图文件。</font><font style="vertical-align: inherit;">而是创建一个将文件移动到指定路径的构建后步骤。</font></font></td>
    </tr>
    <tr>
      <td><code>--maxNodeModuleJsDepth</code></td>
      <td><code>number</code></td>
      <td><code>0</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在node_modules下搜索并加载JavaScript文件的最大依赖深度。</font><font style="vertical-align: inherit;">仅适用于</font></font><code>--allowJs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--module</code><br><code>-m</code></td>
      <td><code>string</code></td>
      <td><code>target === "ES3" or "ES5" ? "CommonJS" : "ES6"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定模块代码生成：</font></font><code>"None"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"CommonJS"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"AMD"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"System"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"UMD"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"ES6"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"ES2015"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"ESNext"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">►只有</font></font><code>"AMD"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>"System"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可与结合使用</font></font><code>--outFile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES6"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>"ES2015"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值可在定位</font></font><code>"ES5"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更低时使用。</font></font></td>
    </tr>
    <tr>
      <td><code>--moduleResolution</code></td>
      <td><code>string</code></td>
      <td><code>module === "AMD" or "System" or "ES6" ?  "Classic" : "Node"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定如何解决模块。</font><font style="vertical-align: inherit;">可以</font></font><code>"Node"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Node.js / io.js样式解析</font></font><code>"Classic"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./module-resolution.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块分辨率文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--newLine</code></td>
      <td><code>string</code></td>
      <td><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（特定于平台）</font></font></em></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出文件时，请使用指定的行尾顺序：</font></font><code>"crlf"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（windows）或</font></font><code>"lf"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（unix）。”</font></font></td>
    </tr>
    <tr>
      <td><code>--noEmit</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要发射输出。</font></font></td>
    </tr>
    <tr>
      <td><code>--noEmitHelpers</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要像</font></font><code>__extends</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在编译输出中</font><font style="vertical-align: inherit;">那样生成自定义帮助程序函数</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--noEmitOnError</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果报告了任何错误，请不要发出输出。</font></font></td>
    </tr>
    <tr>
      <td><code>--noErrorTruncation</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要截断错误消息。</font></font></td>
    </tr>
    <tr>
      <td><code>--noFallthroughCasesInSwitch</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在switch语句中报告失败情况的错误。</font></font></td>
    </tr>
    <tr>
      <td><code>--noImplicitAny</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在隐</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">式类型的</font><font style="vertical-align: inherit;">表达式和声明上引发错误</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--noImplicitReturns</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当函数中的所有代码路径均未返回值时，报告错误。</font></font></td>
    </tr>
    <tr>
      <td><code>--noImplicitThis</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">式类型的</font><font style="vertical-align: inherit;">表达式上引发</font><font style="vertical-align: inherit;">错误</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--noImplicitUseStrict</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在模块输出中</font><font style="vertical-align: inherit;">发出</font><font style="vertical-align: inherit;">指令。</font></font></td>
    </tr>
    <tr>
      <td><code>--noLib</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要包括默认的库文件（</font></font><code>lib.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></td>
    </tr>
    <tr>
      <td><code>--noResolve</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要将三斜杠引用或模块导入目标添加到已编译文件列表中。</font></font></td>
    </tr>
    <tr>
      <td><code>--noStrictGenericChecks</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用对功能类型中的通用签名的严格检查。</font></font></td>
    </tr>
    <tr>
      <td><code>--noUnusedLocals</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告未使用的本地错误。</font></font></td>
    </tr>
    <tr>
      <td><code>--noUnusedParameters</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告未使用参数的错误。</font></font></td>
    </tr>
    <tr>
      <td><del><code>--out</code></del></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已淘汰。</font><font style="vertical-align: inherit;">使用</font></font><code>--outFile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替。</font></font></td>
    </tr>
    <tr>
      <td><code>--outDir</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出结构重定向到目录。</font></font></td>
    </tr>
    <tr>
      <td><code>--outFile</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接并输出到单个文件。</font><font style="vertical-align: inherit;">串联顺序由命令行上传递给编译器的文件列表以及三斜杠引用和导入确定。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-control-file-ordering-in-combined-output---out-"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出文件顺序文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>paths</code><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[2]</font></font></sup></td>
      <td><code>Object</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径映射条目列表，用于模块名称到相对于的位置</font></font><code>baseUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./module-resolution.html#path-mapping"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块分辨率文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--preserveConstEnums</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要在生成的代码中擦除const枚举声明。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#94-constant-enum-declarations"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const枚举文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--preserveSymlinks</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要将符号链接解析为其真实路径；</font><font style="vertical-align: inherit;">将符号链接文件视为真实文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--preserveWatchOutput</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将过时的控制台输出保持在监视模式下，而不是清除屏幕</font></font></td>
    </tr>
    <tr>
      <td><code>--pretty</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 除非管道传输到另一个程序或将输出重定向到文件</font></font></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用颜色和上下文样式化错误和消息。</font></font></td>
    </tr>
    <tr>
      <td><code>--project</code><br><code>-p</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定有效配置文件的项目。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该参数可以是有效JSON配置文件的文件路径，也可以是包含该</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的目录的目录路径</font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./tsconfig-json.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tsconfig.json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档。</font></font></td>
    </tr>
    <tr>
      <td><code>--reactNamespace</code></td>
      <td><code>string</code></td>
      <td><code>"React"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已淘汰。</font><font style="vertical-align: inherit;">使用</font></font><code>--jsxFactory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定对象调用的</font></font><code>createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>__spread</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定位时</font></font><code>"react"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX发射。</font></font></td>
    </tr>
    <tr>
      <td><code>--removeComments</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除所有以开头的版权右标题注释除外的注释 </font></font><code>/*!</code></td>
    </tr>
    <tr>
      <td><code>--resolveJsonModule</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括随</font></font><code>.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font><font style="vertical-align: inherit;">导入的模块</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--rootDir</code></td>
      <td><code>string</code></td>
      <td><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（公共根目录是从输入文件列表中计算得出的）</font></font></em></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定输入文件的根目录。</font><font style="vertical-align: inherit;">仅用于通过来控制输出目录结构</font></font><code>--outDir</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>rootDirs</code><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[2]</font></font></sup></td>
      <td><code>string[]</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"></font><i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根</font></font></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">列表，</font><font style="vertical-align: inherit;">其组合内容表示运行时项目的结构。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./module-resolution.html#virtual-directories-with-rootdirs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块分辨率文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--showConfig</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是实际使用其他输入选项和配置文件执行构建，而是在输出中显示最终的隐含配置文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--skipDefaultLibCheck</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已淘汰。</font><font style="vertical-align: inherit;">使用</font></font><code>--skipLibCheck</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跳过</font></font><a href="./triple-slash-directives.html#-reference-no-default-libtrue"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认库声明文件的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型检查</font><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--skipLibCheck</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跳过所有声明文件的类型检查（</font></font><code>*.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></td>
    </tr>
    <tr>
      <td><code>--sourceMap</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成相应的</font></font><code>.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--sourceRoot</code></td>
      <td><code>string</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定调试器应在其中定位TypeScript文件的位置，而不是源位置。</font><font style="vertical-align: inherit;">如果源在运行时与设计时的位置不同，请使用此标志。</font><font style="vertical-align: inherit;">指定的位置将嵌入到sourceMap中，以将源文件所在的调试器定向到。</font></font></td>
    </tr>
    <tr>
      <td><code>--strict</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用所有严格的类型检查选项。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用</font></font><code>--strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使</font></font><code>--noImplicitAny</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--noImplicitThis</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--alwaysStrict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--strictBindCallApply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--strictNullChecks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>--strictFunctionTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>--strictPropertyInitialization</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--strictBindCallApply</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用的更严格的检查</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对功能的方法。</font></font></td>
    </tr>
    <tr>
      <td><code>--strictFunctionTypes</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用函数类型的双变量参数检查。</font></font></td>
    </tr>
    <tr>
      <td><code>--strictPropertyInitialization</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保在构造函数中初始化未定义的类属性。</font></font><code>--strictNullChecks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须启用</font><font style="vertical-align: inherit;">此选项才能</font><font style="vertical-align: inherit;">生效。</font></font></td>
    </tr>
    <tr>
      <td><code>--strictNullChecks</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格的null检查模式下，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值不在每种类型的域中，并且只能分配给它们自己</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以分配给</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></td>
    </tr>
    <tr>
      <td><code>--suppressExcessPropertyErrors</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止对对象文字进行多余的属性检查。</font></font></td>
    </tr>
    <tr>
      <td><code>--suppressImplicitAnyIndexErrors</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止</font></font><code>--noImplicitAny</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为缺少索引签名的对象建立索引的错误。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://github.com/Microsoft/TypeScript/issues/1232#issuecomment-64510362"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题＃1232</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--target</code><br><code>-t</code></td>
      <td><code>string</code></td>
      <td><code>"ES3"</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定ECMAScript的目标版本：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES3"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（默认值）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES5"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES6"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>"ES2015"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES2016"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES2017"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES2018"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES2019"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ES2020"</code> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">► </font></font><code>"ESNext"</code><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注：</font></font><code>"ESNext"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标最新的支持</font></font><a href="https://github.com/tc39/proposals"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES建议功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--traceResolution</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告模块解析日志消息。</font></font></td>
    </tr>
    <tr>
      <td><code>--tsBuildInfoFile</code></td>
      <td><code>string</code></td>
      <td><code>.tsbuildinfo</code></td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定要在其中存储增量构建信息的文件。</font></font></td>
    </tr>
    <tr>
      <td><code>--types</code></td>
      <td><code>string[]</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要包括的类型定义的名称列表。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息</font></font><a href="./tsconfig-json.html#types-typeroots-and-types"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见</font><a href="./tsconfig-json.html#types-typeroots-and-types"><font style="vertical-align: inherit;">@types，–typeRoots和–types</font></a><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--typeRoots</code></td>
      <td><code>string[]</code></td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含类型定义的文件夹列表。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息</font></font><a href="./tsconfig-json.html#types-typeroots-and-types"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见</font><a href="./tsconfig-json.html#types-typeroots-and-types"><font style="vertical-align: inherit;">@types，–typeRoots和–types</font></a><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
    <tr>
      <td><code>--version</code><br><code>-v</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印编译器的版本。</font></font></td>
    </tr>
    <tr>
      <td><code>--watch</code><br><code>-w</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在监视模式下运行编译器。</font><font style="vertical-align: inherit;">监视输入文件并触发对更改的重新编译。</font><font style="vertical-align: inherit;">监视文件和目录的实现可以使用环境变量进行配置。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="./configuring-watch.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置手表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></td>
    </tr>
  </tbody>
</table>