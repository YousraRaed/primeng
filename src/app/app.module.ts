import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydemopageComponent } from './mydemopage/mydemopage.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { CardModule } from 'primeng/card';
import { CalenderComponent } from './component/calender/calender.component';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsComponent } from './component/chips/chips.component';
import { ChipsModule } from 'primeng/chips';
import { ColorpickerComponent } from './component/colorpicker/colorpicker.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CascadeSelectComponent } from './component/cascade-select/cascade-select.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupComponent } from './component/input-group/input-group.component';
import { InputmaskComponent } from './component/inputmask/inputmask.component';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchComponent } from './component/input-switch/input-switch.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextComponent } from './component/input-text/input-text.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextAreaComponent } from './component/input-text-area/input-text-area.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputNumberComponent } from './component/input-number/input-number.component';
import { KnobComponent } from './component/knob/knob.component';
import { KnobModule } from 'primeng/knob';
import { KeyFilterComponent } from './component/key-filter/key-filter.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxComponent } from './component/listbox/listbox.component';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectComponent } from './component/multi-select/multi-select.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { PasswordComponent } from './component/password/password.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadioButtonComponent } from './component/radio-button/radio-button.component';
import { RatingComponent } from './component/rating/rating.component';
import { RatingModule } from 'primeng/rating';
import { SelectButtonComponent } from './component/select-button/select-button.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TogglebuttonComponent } from './component/togglebutton/togglebutton.component';
import { SplitButtonComponent } from './component/split-button/split-button.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { TableComponent } from './component/table/table.component';
import { TableModule } from 'primeng/table';
import { ChartComponent } from './component/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { SignInBlockComponent } from './component/sign-in-block/sign-in-block.component';
import { PricingPlanBlockComponent } from './component/pricing-plan-block/pricing-plan-block.component';
import { MarketingComponent } from './component/marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    MydemopageComponent,
    AutoCompleteComponent,
    CalenderComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorpickerComponent,
    CascadeSelectComponent,
    DropdownComponent,
    InputGroupComponent,
    InputmaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputNumberComponent,
    KnobComponent,
    KeyFilterComponent,
    ListboxComponent,
    MultiSelectComponent,
    PasswordComponent,
    RadioButtonComponent,
    RatingComponent,
    SelectButtonComponent,
    TogglebuttonComponent,
    SplitButtonComponent,
    TableComponent,
    ChartComponent,
    SignInBlockComponent,
    PricingPlanBlockComponent,
    MarketingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppLayoutModule,
    AutoCompleteModule,
    CardModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    CascadeSelectModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    ToggleButtonModule,
    SplitButtonModule,
    ToastModule,
    TableModule,
    ChartModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
