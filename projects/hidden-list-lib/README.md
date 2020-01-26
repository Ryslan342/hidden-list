# Hidden List

## How to install?
`
npm i hidden-list
`

And import to you app

```angular2
import { HiddenListLibModule } from 'hidden-list-lib';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HiddenListLibModule
  ],
})
```

## How to use?

### Base using
```angular2html
<div HiddenList> 
    <div HiddenListController>Click for show\hide </div>
    <div HiddenListView>
        Add overflow: hidden styles for this element 
        Add if need animation you can add transition: height 
        Other text and elements...
    </div>
</div>
```

### Set a default state

```angular2html
<div HiddenList  [show]="true"> 
    <div HiddenListController>Click for show\hide </div>
    <div HiddenListView>
        Add overflow: hidden styles for this element 
        Add if need animation you can add transition: height 
        Other text and elements...
    </div>
</div>
```

### Group 
Only one hidden-list can be show

```angular2html
<div HiddenList  [group]="'group_id'"> 
    <div HiddenListController>Click for show\hide </div>
    <div HiddenListView>
        Add overflow: hidden styles for this element 
        Add if need animation you can add transition: height 
        Other text and elements...
    </div>
</div>

<div HiddenList  [group]="'group_id'"> 
    <div HiddenListController>Click for show\hide </div>
    <div HiddenListView>
        Add overflow: hidden styles for this element 
        Add if need animation you can add transition: height 
        Other text and elements...
    </div>
</div>

<div HiddenList  [group]="'group_id'"> 
    <div HiddenListController>Click for show\hide </div>
    <div HiddenListView>
        Add overflow: hidden styles for this element 
        Add if need animation you can add transition: height 
        Other text and elements...
    </div>
</div>
```
