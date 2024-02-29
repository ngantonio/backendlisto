/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { Company } from './schemas/company.schema';
import { CreateCompanyDTO } from 'src/company/dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';

@Resolver()
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query((returns) => [Company])
  companies() {
    return this.companyService.findAll();
  }

  @Query((returns) => Company)
  company(@Args('id') id: string) {
    return this.companyService.findById(id);
  }

  @Mutation((returns) => Company)
  createCompany(@Args('companyInput') companyInput: CreateCompanyDTO) {
    return this.companyService.create(companyInput);
  }

  @Mutation((returns) => Company)
  updateCompany(
    @Args('id') id: string,
    @Args('companyInput') companyInput: UpdateCompanyDTO,
  ) {
    return this.companyService.update(id, companyInput);
  }

  @Mutation((returns) => Company)
  deleteCompany(@Args('id') id: string) {
    return this.companyService.delete(id);
  }
}
