import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: ':id', component: UserProfileComponent }])],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}
