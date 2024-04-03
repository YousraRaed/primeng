# Using a PrimeNG Template in Angular Project

This guide outlines the steps to integrate a PrimeNG template into an Angular project.

## Step 1: Install Dependencies

```
npm i primeflex
```

```
npm i primeicons
```

```
npm i primeng
```

## Step 2: Copy Layout Folder

- Copy the layout folder located under the app directory of your PrimeNG template.
- Paste it into the app folder of your Angular project.

## Step 3: Copy Assets/Layout Folder

- Copy the layout folder located under the assets directory of your PrimeNG template.
- Paste it into the assets folder of your Angular project.

## Step 4: Update styles.scss

- Open the styles.scss file in the src folder of your Angular project.
- Add the following imports at the beginning of the file:

```
/* PrimeNG */
@import "../node_modules/primeng/resources/primeng.min.css";
@import "../node_modules/primeicons/primeicons.css";

/* PrimeFlex */
@import "../node_modules/primeflex/primeflex.scss";

/* Layout Styles */
@import "assets/layout/styles/layout/layout.scss";
```

## Step 5: Add Theme Import in index.html

- Open the index.html file in the src folder of your Angular project.
- Add the following <link> tag inside the <head> section of the file to use a PrimeNG theme (replace theme.css with the desired theme file):

```
<link rel="stylesheet" type="text/css" href="assets/layout/styles/theme/theme.css">
```

## Step 6: Import AppLayoutModule

- Add AppLayoutModule to the imports array:

```
imports: [
  BrowserModule,
  AppRoutingModule,
  AppLayoutModule
],
```

- Open your AppModule file (usually app.module.ts).
- Import AppLayoutModule from the layout folder:

```
import { AppLayoutModule } from './layout/app.layout.module';
```

## Step 7: Update Route Configuration

- Open your route configuration file (usually app-routing.module.ts).
- Update the routes to use AppLayoutComponent as the parent component:

```
const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: MydemopageComponent,
      },
      // Add more child routes if needed
    ],
  },
  // Add more routes if needed
];
```

Now, your Angular project should be configured to use the PrimeNG template. Make sure to replace theme.css with the appropriate theme file name you want to use from PrimeNG. Also, adjust the route configuration as per your application's requirements.

## Creating Custom Themes

- Previously, users were able to create custom themes using the legacy visual theme editor available at designer.primeng.org. However, this tool is no longer available due to its outdated nature and the challenges associated with maintaining it.

- Instead, users can now utilize the new theme editor provided by PrimeFaces at primefaces.org/designer-jsf. This new theme editor offers an improved experience for creating custom themes.

## Prime Blocks

- PrimeBlocks for Angular consists of copy paste ready UI blocks crafted with PrimeFlex where theming and interactivity is provided by PrimeNG.
- Documentation for prime Block https://blocks.primeng.org/#/documentation

- All the available blocks
  https://blocks.primeng.org/#/

- Free blocks
  https://blocks.primeng.org/#/free
