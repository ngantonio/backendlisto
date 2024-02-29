import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './schemas/company.schema';
import { Model } from 'mongoose';
import { CreateCompanyDTO } from 'src/company/dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  findAll() {
    return this.companyModel.find().exec();
  }

  findById(id: string) {
    return this.companyModel.findById(id).exec();
  }

  create(companyData: CreateCompanyDTO) {
    const newCompany = new this.companyModel(companyData);
    return newCompany.save();
  }

  update(id: string, companyData: UpdateCompanyDTO) {
    return this.companyModel
      .findByIdAndUpdate(id, companyData, {
        new: true,
      })
      .exec();
  }

  delete(id: string) {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
